export type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TTodoAdd = Omit<TTodo, "id">;
export type TTodoCompleted = Pick<TTodo, "completed"> & Pick<TTodo, "id">;
export type TTodoDelete = TTodo["id"];
