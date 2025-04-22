import { FC } from "react"
import { P_Small } from "../../atoms/Typography/P_Small/P_Small"
import { Capitalize } from "../../../utils/helpers"

interface SpecsProps {
  specs: {[key: string]: string | string[]}
}

export const Specs: FC<SpecsProps> = ({ specs }) => {
  return (
    <div className="specs">
      {Object.entries(specs).map(([key, value]) => {
        const isRam = key === 'ram';
        return (
          <div className="spec-item" key={key + value}>
            <P_Small className="spec-name">{isRam ? key.toUpperCase() : Capitalize(key)}</P_Small>
            <P_Small className="spec-value">{Array.isArray(value) ? value.join(', ') : value}</P_Small>
          </div>
        );
      })}
    </div>
  );
};
