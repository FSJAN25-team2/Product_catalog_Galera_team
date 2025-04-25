import { H2 } from "../../design/atoms/Typography/H2/H2"
import { H3 } from "../../design/atoms/Typography/H3/H3"

interface Props {
  priceDiscount: number;
  priceRegular: number;
}

export const PriceBlock: React.FC<Props> = ({ priceDiscount, priceRegular }) => {
  return (
    <div className="price">
      <H2>${priceDiscount}</H2>
      <H3 className="price__full">${priceRegular}</H3>
    </div>
  )
}