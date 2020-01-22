import React, { FC } from "react";
import { KeepCalmAnd } from "../../components/keepCalm/keepCalm";

export const Dashboard: FC = () => {
  return (
    <div>
      <h1>
        Hola, soy el Dashboard{" "}
        <span role="img" aria-label="Sparkles">
          ✨
        </span>{" "}
      </h1>

      <KeepCalmAnd />

    </div>
  );
};
