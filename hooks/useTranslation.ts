import { useRouter } from "next/router";
import { LocaleInterface } from "../data/LocaleInterface";
import en from "./../data/en";
import es from "./../data/es";

export const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const t: LocaleInterface = locale === "en" ? en : es;
  return { t, locale };
};
