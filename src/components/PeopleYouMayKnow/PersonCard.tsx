import React from "react";

interface Person {
  name: string;
  imageUrl: string;
  verifiedImageUrl?: string;
  followedBy: string;
}

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <div className="flex gap-2 mt-6 w-full">
      <div className="flex gap-2.5 items-center min-h-[50px]">
        <img
          loading="lazy"
          src={person.imageUrl}
          alt={`Profile picture of ${person.name}`}
          className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[50px]"
        />
        <div className="flex flex-col self-stretch my-auto">
          <div className="flex gap-1 items-end text-base font-semibold text-black">
            <div>{person.name}</div>
            {person.verifiedImageUrl && (
              <img
                loading="lazy"
                src={person.verifiedImageUrl}
                alt="Verified badge"
                className="object-contain shrink-0 w-5 aspect-square"
              />
            )}
          </div>
          <div className="text-xs text-zinc-500">{person.followedBy}</div>
        </div>
      </div>
      <button className="gap-2.5 self-stretch px-4 py-1.5 my-auto text-base font-semibold text-right text-black whitespace-nowrap rounded-2xl bg-white bg-opacity-0 min-h-[30px]">
        Follow
      </button>
    </div>
  );
};

export default PersonCard;
