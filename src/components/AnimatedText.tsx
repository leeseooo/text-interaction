import { type JSX } from 'react';
import styles from './AnimatedText.module.scss';

export type MotionPreset = 'fade' | 'slide';
export type SplitType = 'character' | 'word' | 'line';

interface AnimatedTextProps {
  as?: keyof JSX.IntrinsicElements;
  text: string;
  preset?: MotionPreset;
  split?: SplitType;
  className?: string;
}

const splitText = (text: string, split: SplitType): string[] => {
  switch (split) {
    case 'character':
      return [...text];
    case 'word':
      return text.split(/(\s+)/); // keep spaces
    case 'line':
      return text.split(/\n/);
    default:
      return [text];
  }
};

const AnimatedText = ({
  as = 'span',
  text,
  preset = 'fade',
  split = 'character',
  className = '',
}: AnimatedTextProps) => {
  const Tag = as;
  const units = splitText(text, split);

  return (
    <Tag className={`${styles.container} ${styles[preset]} ${styles[split]} ${className}`}>
      {units.map((unit, index) => (
        <span key={index} className={styles.unit} style={{ animationDelay: `${index * 0.05}s` }}>
          {unit === ' ' ? '\u00A0' : unit}
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
