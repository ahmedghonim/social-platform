import React from "react";
import PersonCard from "./PersonCard";

interface Person {
  name: string;
  imageUrl: string;
  verifiedImageUrl?: string;
  followedBy: string;
}

const peopleData: Person[] = [
  {
    name: "Caroline Margolotta",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bdc6328d68430735e33495f9222a040828017198ad86e26c670ae643debc3463?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    verifiedImageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3108849ae0d2720e20c0a0b691b086b533d834f9c0123f2927f6b9e90c19669a?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    followedBy: "Followed by Random",
  },
  {
    name: "Blanche Walker",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bf075b0efa739595e3442ed6fcab9936293d07d3bd294bbc0c010e43212b859b?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    verifiedImageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6d483820fc1f17ac35aa4e2719b4abd54877d6ddb96e3bd489aa280794010d98?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    followedBy: "Followed by Random + 3 more",
  },
  {
    name: "Josephine Fangula",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a04f3f5857c8de6fae62f765257f0922f2aafdebdf144a5ee84a9146f9b4b04d?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    followedBy: "Followed by Random",
  },
  {
    name: "Dr Louise Sails",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9e135a5029a7dc25600e0a40f37ceb7e4732d24f654c1185f1aaa67a9a74a2ec?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    verifiedImageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/14779e07998d22a960bd76b98c70712b80237ea6e3468b551bc97dc852c99502?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070",
    followedBy: "Followed by Random + 3 more",
  },
];

const PeopleYouMayKnow: React.FC = () => {
  return (
    <section className="flex flex-col px-4 py-5 w-full bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)]">
      <h2 className="self-start text-base font-semibold text-black">
        People you may know
      </h2>
      {peopleData.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </section>
  );
};

export default PeopleYouMayKnow;
