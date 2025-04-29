import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import './CheckoutForm.scss';
import { H1 } from '../../atoms/Typography/H1/H1';
import { useAppDispatch } from '../../../store/hooks';
import * as CartAction from '../../../store/features/cartProducts';
import {
  fetchCities,
  fetchWarehouses,
} from '../../../services/api/novaposhtaApi';
import OrderSuccessAnimation from '../../atoms/OrderSuccessAnimation/OrderSuccessAnimation';

interface CheckoutFormProps {
  onClose: () => void;
  totalPrice: number;
  totalItems: number;
}

interface City {
  Ref: string;
  Description: string;
}

interface Warehouse {
  Ref: string;
  Description: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onClose,
  totalPrice,
  totalItems,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash');
  const dispatch = useAppDispatch();

  const [city, setCity] = useState<string>('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState<City[]>([]);
  const [selectedCityRef, setSelectedCityRef] = useState<string>('');
  const [warehouse, setWarehouse] = useState<string>('');
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [showCitySuggestions, setShowCitySuggestions] =
    useState<boolean>(false);

  // Card validation states
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<string>('');
  const [expiryDateError, setExpiryDateError] = useState<string>('');
  const [cvvError, setCvvError] = useState<string>('');

  useEffect(() => {
    if (selectedCityRef) {
      fetchWarehouses(selectedCityRef)
        .then(setWarehouses)
        .catch(error => console.error('Error fetching warehouses:', error));
    }
  }, [selectedCityRef]);

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    setShowCitySuggestions(true);

    if (value.length > 2) {
      fetchCities(value)
        .then(cities => {
          setCitySuggestions(cities);
        })
        .catch(error => console.error('Error fetching cities:', error));
    } else {
      setCitySuggestions([]);
    }
  };

  const handleCitySelect = (city: City) => {
    setCity(city.Description);
    setSelectedCityRef(city.Ref);
    setShowCitySuggestions(false);
    setWarehouse('');
  };

  const handleWarehouseChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWarehouse(e.target.value);
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value as 'cash' | 'card');

    // Reset card validation errors when switching payment methods
    if (e.target.value !== 'card') {
      setCardNumberError('');
      setExpiryDateError('');
      setCvvError('');
    }
  };

  // Format and validate card number
  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length <= 16) {
      // Format with spaces after every 4 digits
      const formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
      setCardNumber(formatted);

      // Validate using Luhn algorithm
      if (value.length === 16) {
        if (validateCardNumber(value)) {
          setCardNumberError('');
        } else {
          setCardNumberError('Invalid card number');
        }
      } else {
        setCardNumberError('');
      }
    }
  };

  // Format and validate expiry date
  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length <= 4) {
      let formatted = value;

      // Auto-insert slash after first 2 digits
      if (value.length > 2) {
        formatted = value.slice(0, 2) + '/' + value.slice(2);
      }

      setExpiryDate(formatted);

      // Validate expiry date
      if (value.length === 4) {
        const month = parseInt(value.slice(0, 2));
        const year = parseInt('20' + value.slice(2));
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        if (month < 1 || month > 12) {
          setExpiryDateError('Invalid month');
        } else if (
          year < currentYear ||
          (year === currentYear && month < currentMonth)
        ) {
          setExpiryDateError('Card expired');
        } else {
          setExpiryDateError('');
        }
      } else {
        setExpiryDateError('');
      }
    }
  };

  // Validate CVV
  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length <= 3) {
      setCvv(value);
      setCvvError(value.length === 3 ? '' : '');
    }
  };

  // Luhn algorithm for card number validation
  const validateCardNumber = (number: string): boolean => {
    let sum = 0;
    let shouldDouble = false;

    // Loop through values starting from the rightmost side
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number.charAt(i));

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Additional validation check before submission
    if (paymentMethod === 'card') {
      if (cardNumber.length < 19) {
        setCardNumberError('Card number must be 16 digits');
        return;
      }

      if (expiryDate.length < 5) {
        setExpiryDateError('Please enter a valid expiry date');
        return;
      }

      if (cvv.length < 3) {
        setCvvError('CVV must be 3 digits');
        return;
      }

      if (cardNumberError || expiryDateError || cvvError) {
        return;
      }
    }

    setShowAnimation(true);

    setTimeout(() => {
      dispatch(CartAction.removeAllFromCart());
      onClose();
    }, 2500);
  };

  return (
    <div className="checkout-overlay">
      <section className="checkout">
        <div className="checkout__header">
          <H1 className="checkout__title">Checkout</H1>
        </div>

        <form className="checkout__form" onSubmit={handleSubmit}>
          <div className="checkout__section">
            <h2 className="checkout__section-title">Personal Information</h2>

            <div className="checkout__field">
              <label className="checkout__label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="checkout__input"
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>

            <div className="checkout__field">
              <label className="checkout__label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="checkout__input"
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>

            <div className="checkout__field">
              <label className="checkout__label" htmlFor="email">
                Email
              </label>
              <input
                className="checkout__input"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className="checkout__section">
            <h2 className="checkout__section-title">Nova Poshta</h2>

            <div className="checkout__field">
              <label className="checkout__label" htmlFor="city">
                City
              </label>
              <div className="checkout__autocomplete">
                <input
                  className="checkout__input"
                  type="text"
                  id="city"
                  placeholder="Enter city name"
                  value={city}
                  onChange={handleCityChange}
                  required
                />
                {showCitySuggestions && citySuggestions.length > 0 && (
                  <ul className="checkout__suggestions">
                    {citySuggestions.map(city => (
                      <li
                        key={city.Ref}
                        onClick={() => handleCitySelect(city)}
                        className="checkout__suggestion-item"
                      >
                        {city.Description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="checkout__field">
              <label className="checkout__label" htmlFor="warehouse">
                Branch Office
              </label>
              <select
                className="checkout__select"
                id="warehouse"
                value={warehouse}
                onChange={handleWarehouseChange}
                required
                disabled={!selectedCityRef}
              >
                <option value="">Select branch office</option>
                {warehouses.map(w => (
                  <option className="option" key={w.Ref} value={w.Description}>
                    {w.Description}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="checkout__section">
            <h2 className="checkout__section-title">Payment Method</h2>

            <div className="checkout__radio-group">
              <div className="checkout__radio">
                <input
                  className="checkout__radio-input"
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentMethodChange}
                />
                <label className="checkout__radio-label" htmlFor="cash">
                  Cash on Delivery
                </label>
              </div>

              <div className="checkout__radio">
                <input
                  className="checkout__radio-input"
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={handlePaymentMethodChange}
                />
                <label className="checkout__radio-label" htmlFor="card">
                  Credit/Debit Card
                </label>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="checkout__card-details">
                <div className="checkout__field">
                  <label className="checkout__label" htmlFor="cardNumber">
                    Card Number
                  </label>
                  <input
                    className={`checkout__input ${cardNumberError ? 'checkout__input--error' : ''}`}
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required={paymentMethod === 'card'}
                    maxLength={19}
                  />
                  {cardNumberError && (
                    <div className="checkout__error-message">
                      {cardNumberError}
                    </div>
                  )}
                </div>

                <div className="checkout__field">
                  <label className="checkout__label" htmlFor="expiryDate">
                    Expiry Date
                  </label>
                  <input
                    className={`checkout__input ${expiryDateError ? 'checkout__input--error' : ''}`}
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    required={paymentMethod === 'card'}
                    maxLength={5}
                  />
                  {expiryDateError && (
                    <div className="checkout__error-message">
                      {expiryDateError}
                    </div>
                  )}
                </div>

                <div className="checkout__field">
                  <label className="checkout__label" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    className={`checkout__input ${cvvError ? 'checkout__input--error' : ''}`}
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="XXX"
                    value={cvv}
                    onChange={handleCvvChange}
                    required={paymentMethod === 'card'}
                    maxLength={3}
                  />
                  {cvvError && (
                    <div className="checkout__error-message">{cvvError}</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="checkout__summary">
            <div className="checkout__total">
              <span className="checkout__total-price">
                $
                {totalPrice % 1 === 0
                  ? totalPrice.toFixed(0)
                  : totalPrice.toFixed(2)}
              </span>
              <span className="checkout__total-description">
                Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>

          <div className="checkout__hr-line"></div>

          <div className="checkout__actions">
            <button
              className="checkout__button checkout__button--back"
              type="button"
              onClick={onClose}
            >
              Back to Cart
            </button>
            <button
              className="checkout__button checkout__button--submit"
              type="submit"
            >
              Complete Order
            </button>
          </div>
        </form>
        {showAnimation && <OrderSuccessAnimation />}
      </section>
    </div>
  );
};
