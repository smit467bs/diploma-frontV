export interface PreviewInterview {
  _id: string;
  label: string;
  admin: {
    _id: string;
    displayed_name: string;
  };
  assignTo: string;
}
