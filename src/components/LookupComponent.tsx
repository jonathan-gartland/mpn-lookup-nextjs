import React, { useState } from "react";
import { getQt2KMpn, getQtLegio, getQtMpn } from "@/util/mpn.lookup";

interface MyComponentProps {
  testtype: string;
}

const LookupComponent: React.FC<MyComponentProps> = ({ testtype }) => {
  const QtDiv = () => {
    const [inputQt, setInputQt] = useState(0);
    const handleChangeQt = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputQt(Number(event.target.value));
    };
    const mpnVal = getQtMpn(inputQt) !== undefined ? getQtMpn(inputQt) : [];
    return (
      <div>
        <p data-testid="pos-well-title">Positive Wells</p>
        <input
          type="numeric"
          min={0}
          max={51}
          value={inputQt}
          defaultValue={0}
          onChange={handleChangeQt}
        />
        {testtype === "quanti" && mpnVal !== undefined && (
          <>
            <h1>
              MPN :{" "}
              {mpnVal.length === 0
                ? "Invalid Count!"
                : mpnVal && (mpnVal[0] === "<1.0" || mpnVal[0] === ">200.5")
                  ? mpnVal[0] === "<1.0"
                    ? "< 1.0"
                    : "> 200.5"
                  : mpnVal[0]}
            </h1>
            <div>95% Confidence</div>
            <div className="flex row space-x-1.5">
              <div>Low: {mpnVal && mpnVal[1]}</div>
              <div>
                High:{" "}
                {mpnVal && mpnVal[2] === "infinite" ? "Infinite" : mpnVal[2]}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  const Qt2kDiv = () => {
    const [inputQt2kL, setInputQt2kL] = useState(0);
    const [inputQt2kS, setInputQt2kS] = useState(0);
    const handleChangeQt2kL = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputQt2kL(Number(event.target.value));
    };
    const handleChangeQt2kS = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputQt2kS(Number(event.target.value));
    };
    const mpnVal =
      getQt2KMpn(inputQt2kL, inputQt2kS) !== undefined
        ? getQt2KMpn(inputQt2kL, inputQt2kS)
        : [];

    return (
      <div>
        <p data-testid="pos-well-title">Positive Wells</p>
        <div className="flex flex-row space-x-1.5">
          <div>
            <p>Large</p>
            <input
              type="numeric"
              min={0}
              max={49}
              value={inputQt2kL}
              defaultValue={0}
              onChange={handleChangeQt2kL}
            />
          </div>
          <div>
            <p>Small</p>
            <input
              type="numeric"
              min={0}
              max={49}
              value={inputQt2kS}
              defaultValue={0}
              onChange={handleChangeQt2kS}
            />
          </div>
        </div>
        {testtype === "quanti2k" && (
          <>
            <div>
              <h1>MPN : {mpnVal !== undefined && mpnVal[0]}</h1>
            </div>
            <div>95% Confidence</div>
            <div className="flex row space-x-1.5">
              <div>Low: {mpnVal && mpnVal[1]}</div>
              <div>High: {mpnVal && mpnVal[2]}</div>
            </div>
          </>
        )}
      </div>
    );
  };

  const QtLDiv = () => {
    const [inputLL, setInputLL] = useState(0);
    const [inputLS, setInputLS] = useState(0);

    const handleChangeLL = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputLL(Number(event.target.value));
    };

    const handleChangeLS = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputLS(Number(event.target.value));
    };

    return (
      <div>
        <p data-testid="pos-well-title">Positive Wells</p>
        <div className="flex flex-row space-x-1.5">
          <div>
            <p>Large</p>
            <input
              type="numeric"
              min={0}
              max={6}
              value={inputLL}
              defaultValue={0}
              onChange={handleChangeLL}
            />
          </div>
          <div>
            <p>Small</p>
            <input
              type="numeric"
              min={0}
              max={90}
              value={inputLS}
              defaultValue={0}
              onChange={handleChangeLS}
            />
          </div>
        </div>
        {testtype === "legiolert" && (
          <h1>MPN : {getQtLegio(inputLL, inputLS)}</h1>
        )}
      </div>
    );
  };
  return testtype === "quanti" ? (
    <div>{QtDiv()}</div>
  ) : testtype === "quanti2k" ? (
    <div>{Qt2kDiv()}</div>
  ) : (
    <div>{QtLDiv()}</div>
  );
};

export default LookupComponent;
