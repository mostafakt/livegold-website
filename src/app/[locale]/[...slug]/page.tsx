import { notFound } from "next/navigation";

type Props = {
  params: {
    locale: string;
    slug: string[];
  };
};

export default function CatchAll({}: Props) {
  notFound();
  return null;
}
