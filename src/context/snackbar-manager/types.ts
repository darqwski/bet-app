export interface ISnackbarContext {
    addSnackBar: (props: { text: string; timeout: number }) => void;
    removeSnackbar: (id: string) => void;
}

export interface ISnackbarItem {
    text: string;
    timeout: number;
    id: string;
}
