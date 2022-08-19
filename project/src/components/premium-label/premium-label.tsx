type PremiumLabelProps = {
  labelType: string;
}

function PremiumLabel({labelType}: PremiumLabelProps): JSX.Element {
  return (
    <div className={`${labelType}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumLabel;
