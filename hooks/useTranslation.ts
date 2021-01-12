import { useRouter } from "next/router";
import { LocaleInterface } from "../data/interfaces/LocaleInterface";
import en from "../data/en/en";
import es from "../data/es/es";

export const useTranslation = () => {
  const router = useRouter();
  const { locale } = router;
  const t: LocaleInterface = locale === "en" ? en : es;
  return { t, locale };
};
