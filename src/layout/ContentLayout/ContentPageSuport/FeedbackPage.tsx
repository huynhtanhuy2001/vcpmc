import { Avatar, List, Segmented } from "antd";
import React from "react";
import ContentTitle from "../../../components/common/Content/contentTitle";
import "./styles.scss";

const FeedbackPage = () => {
  // const data= [];
  // for (let i = 1; i > 50; i++) {
  //   data.push({
  //     image: "https://joesch.moe/api/v1/random",
  //     title: "Tuyet Nguyen",
  //     chuDe: "Khác",
  //     value:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod iaculis metus, nisl risus urna morbi risus. Blandit tempor, ac eu ut volutpat adipiscing aliquam. Habitasse a semper cras non. Laoreet nibh et, erat sit curabitur sapien, commodo Accumsan eget ut blandit sed. Tortor ultrices id amet non sit facilisis auctor phasellus nisl. Bibendum et ultrices consequat luctus interdum elementum. Leo pellentesque nulla lectus adipiscing risus, bibendum. Iaculis porttitor ornare sit nisl. Tellus lectus amet mattis sed at. Nisi augue congue ac faucibus nunc. Sed maecenas mus at urna at. Aliquet sagittis, enim egestas tincidunt leo eu. Libero nunc montes, facilisis ullamcorper scelerisque turpis.",
  //   });
  // }
  const data = Array.from({ length: 23 }).map((_, i) => ({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: `https://joesch.moe/api/v1/random?key=${i}`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  }));

  return (
    <div className="Content-App">
      <ContentTitle title="Feedback" />
      <div className="Content-body">
        <div className="Content-body_FeedBackPage">
          <div className="Content-body_FeedBackPage-Left">
            <List
              itemLayout="vertical"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={data}
          
              renderItem={(item) => (
                <List.Item key={item.title}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
