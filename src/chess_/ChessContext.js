import React from "react";

const ChessContext = React.createContext({});

export const ChessProvider = ChessContext.Provider;
export const ChessConsumer = ChessContext.Consumer;