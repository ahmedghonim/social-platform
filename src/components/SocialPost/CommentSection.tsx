import React from "react";
import CommentInput from "./CommentInput";
import CommentCard, { CommentCardProps } from "./CommentCard";
import ReplyCard from "./ReplyCard";

const CommentSection: React.FC = () => {
  return (
    <section className=" mt-2.5 w-full max-md:max-w-full">
      <div className="flex flex-col gap-[15px]">
        <CommentInput
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f2768f7ec3e52e06176a1e7b7f377e24d127412f1486a008d40e39923947bb77?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070"
          placeholderText="Write a comment…"
          actionIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b007023ebbbfff5e241658a86fa2498888a44af1ff08a059478fef24f819a370?apiKey=b7b17af81e6a424fa0f2533d040e1070&&apiKey=b7b17af81e6a424fa0f2533d040e1070"
        />
        <CommentCard
          username="Ibrahim Adm"
          content="social media poster allows you to schedule and posts to these different social media platforms."
          likes={87.3}
          replies={873}
        />
      </div>
      <div className="flex flex-col items-start ms-[58px] max-w-full max-md:ml-2.5 ">
        <div className="relative pt-5">
          <CommentCard username="Ibrahim Adm" content="social media poster" />
          <div className="absolute top-0 -start-5  h-[38%] w-[20px] border-secondary border-s-[2px] border-b-[2px] rounded-bl-full" />
        </div>
        <ReplierLineDrawer
          data={[
            {
              username: "Ibrahim Adm",
              content: "social media poster allows you to schedule",
              hiddenIcons: true,
            },
            {
              username: "Ibrahim Adm",
              content: "social media poster allows you to schedule",
              likes: 87.3,
              replies: 873,
            },
            {
              username: "Ibrahim Adm",
              content: "social media poster allows you to schedule",
              likes: 87.3,
              replies: 873,
            },
            {
              username: "Ibrahim Adm",
              content: "social media poster allows you to schedule",
            },
            {
              hiddenIcons: true,
              username: "Ibrahim Adm",
              content: "social media poster allows you to schedule",
            },

            {
              username: "Ibrahim Adm",
              content: "social media poster allows you to schedule",
            },
          ]}
        />
      </div>
    </section>
  );
};

function ReplierLineDrawer({ data }: { data: CommentCardProps[] }) {
  return data.map((data, i) => (
    <div className="relative pt-5" key={i}>
      <CommentCard {...data} />
      <div className="absolute -top-[100%] -start-5  h-[140%] w-[20px] border-secondary border-s-[2px] border-b-[2px] rounded-bl-full" />
    </div>
  ));
}

export default CommentSection;
