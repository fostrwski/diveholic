import { useFormikContext as useDefaultFormikContext } from "formik";

import initialValues from "../initialValues";

const useFormikContext = useDefaultFormikContext<typeof initialValues>();

export default useFormikContext;
