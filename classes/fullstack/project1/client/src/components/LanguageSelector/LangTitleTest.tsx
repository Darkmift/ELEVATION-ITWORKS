import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export enum TitleSize {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

export type TitleProps = {
  text: string;
  size?: TitleSize;
  className?: string;
};

const Title: FC<TitleProps> = ({ text, size = 1, className = '' }) => {
  const { t } = useTranslation();
  const TitleTag = `h${size}` as keyof JSX.IntrinsicElements;
  return <TitleTag className={`title-component ${className}`}>{t(text)} + {t("common.loading")}</TitleTag>;
};

export default Title;