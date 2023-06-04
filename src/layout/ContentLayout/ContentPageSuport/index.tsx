import { Tabs } from "antd";
import React, { useState } from "react";

import ContentTitle from "../../../components/common/Content/contentTitle";
import "./styles.scss";

const ContentPageHDSD = () => {
  const dataHDSD = [
    {
      label: "1. Lorem ipsum dolor sit amet",
      value: (
        <>
        <div className="Value_Title">
          <h3>Lorem ipsum dolor sit amet</h3>
        </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit
            placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque
            dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus
            lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
            lectus nunc massa aliquam, tellus in imperdiet. Malesuada
            suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis
            urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget
            lorem eget maecenas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit
            placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque
            dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus
            lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
            lectus nunc massa aliquam, tellus in imperdiet. Malesuada
            suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis
            urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget
            lorem eget maecenas:
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit
            placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque
            dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus
            lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
            lectus nunc massa aliquam, tellus in imperdiet. Malesuada
            suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis
            urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget
            lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit
            placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque
            dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus
            lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
            lectus nunc massa aliquam, tellus in imperdiet. Malesuada
            suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis
            urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget
            lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              sit placerat odio lorem. Cum eleifend bibendum ipsum quis
              scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sit
            placerat odio lorem. Cum eleifend bibendum ipsum quis scelerisque
            dui nibh odio id. Nam cras nec non posuere etiam diam sed lacus
            lacus. In eget morbi eros, vitae enim nunc, cursus. Nisl eleifend
            lectus nunc massa aliquam, tellus in imperdiet. Malesuada
            suspendisse gravida tortor neque quis accumsan et posuere. Ac turpis
            urna ipsum pretium nisi aenean. Facilisis scelerisque placerat eget
            lorem eget maecenas. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </>
      ),
    },
    {
      label: "2. Consectetur adipiscing elit sed do",
      value: "",
    },
    {
      label: "3. Iusmod tempor incididunt ut labo",
      value: "",
    },
    {
      label: "4. Ut enim ad minim veniam",
      value: "",
    },
    {
      label: "5. Quis nostrud exercitation ullamco",
      value: "",
    },

    {
      label: "6. Excepteur sint occaecat cupidatats",
      value: "",
    },
    {
      label: "7. Sunt in culpa qui officiat",
      value: "",
    },
    {
      label: "8. Sed ut perspiciatis unde omnis iste",
      value: "",
    },
  ];

  return (
    <div className="Content-App">
      <ContentTitle title="Hướng dẫn sử dụng" />
      <div className="Content-body">
        <div className="Content-body_SupportPage">
          <div className="Content-body_SupportPage_Title">
            <h3>Danh mục hướng dẫn</h3>
          </div>
          <Tabs
            className="Tab_HDSD"
            tabPosition={"left"}
            items={dataHDSD.map((items, i) => {
              const id = String(i + 1);
              return {
                label: items.label,
                key: id,
                children: items.value,
              };
            })}
          ></Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContentPageHDSD;
