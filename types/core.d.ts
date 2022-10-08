declare module "translation-google";

type IUseState<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ITranslation = ["to" | "from", string];
