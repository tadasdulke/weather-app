interface HighlightedTextProps {
  from: number;
  to: number;
  children: string;
  className: string;
  highlightedClassName: string;
}

const HighlightedText = ({
  from,
  to,
  children,
  className,
  highlightedClassName,
}: HighlightedTextProps) => {
  const highlihed = children.substring(from, from + to);
  const prefix = children.slice(0, from);
  const postfix = children.slice(to, children.length);

  return (
    <p className={className}>
      {prefix}
      <span className={highlightedClassName}>{highlihed}</span>
      {postfix}
    </p>
  );
};

export default HighlightedText;
