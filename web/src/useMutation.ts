import { useState } from 'react';
interface State<TData> {
  data: TData | null;
  loading: boolean;
  error: boolean;
}
export const useMutation = <TData = any, TVariables = any>(query: string) => {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: false,
    error: false,
  });

  const fetch = async (variables?: TVariables) => {
    try {
      setState({ data: null, loading: true, error: false });

      const { data, errors } = await fetch();

      if (errors && errors.length) {
        throw new Error(errors[0].message);
      }
    } catch {
      // catch statement
    }
  };
};
