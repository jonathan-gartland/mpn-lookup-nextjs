import React, { useState } from "react";
import { getMpn } from "@/util/mpn.lookup";

interface MyComponentProps {
  testtype: string; // quanti, quanti2k, legiolert
}

const LookupComponent: React.FC<MyComponentProps> = ({ testtype }) => {
  const QtDiv = () => {
    const [inputQt, setInputQt] = useState(0);
    const handleChangeQt = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputQt(Number(event.target.value));
    };
    const mpnVal = getMpn("qt", { large: inputQt, small: 0 }) || [];
    return (
      <div>
        <h1 className="" data-testid="qt-header">
          QuantiTray&reg; MPN
        </h1>
        <p data-testid="pos-well-title">Positive Wells</p>
        <input
          type="numeric"
          min={0}
          max={51}
          value={inputQt}
          onChange={handleChangeQt}
        />
        {testtype === "quanti" && mpnVal.length > 0 && (
          <>
            <h1>MPN : {mpnVal && mpnVal[0]}</h1>
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
      getMpn("qt2k", { large: inputQt2kL, small: inputQt2kS }) || [];
    return (
      <div>
        <h1 data-testid="qt2k-header">QuantiTray2000&reg; MPN</h1>
        <p data-testid="pos-well-title">Positive Wells</p>
        <div className="flex flex-row space-x-1.5">
          <div>
            <p>Large</p>
            <input
              type="numeric"
              min={0}
              max={49}
              value={inputQt2kL}
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
              onChange={handleChangeQt2kS}
            />
          </div>
        </div>
        {testtype === "quanti2k" && mpnVal.length > 0 && (
          <>
            <h1>MPN : {mpnVal && mpnVal[0]}</h1>
            <div>95% Confidence</div>
            <div className="flex row space-x-1.5">
              <div>Low: {mpnVal[1]}</div>
              <div>
                High: {mpnVal[2] === "infinite" ? "Infinite" : mpnVal[2]}
              </div>
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

    const mpnVal = getMpn("legio", { large: inputLL, small: inputLS }) || [];

    return (
      <div className="text-center text-lg">
        <h1 data-testid="legio-header">Legiolert MPN</h1>
        <p data-testid="pos-well-title">Positive Wells</p>
        <div className="flex flex-row space-x-1.5">
          <div>
            <p>Large</p>
            <input
              type="numeric"
              min={0}
              max={6}
              value={inputLL}
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
              onChange={handleChangeLS}
            />
          </div>
        </div>
        {testtype === "legiolert" && mpnVal && <h1>MPN : {mpnVal}</h1>}
      </div>
    );
  };

  return (
    <div>
      {testtype === "quanti" ? (
        <div>{QtDiv()}</div>
      ) : testtype === "quanti2k" ? (
        <div>{Qt2kDiv()}</div>
      ) : testtype === "legiolert" ? (
        <div>{QtLDiv()}</div>
      ) : undefined}
    </div>
  );
};

export default LookupComponent;
