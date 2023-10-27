import axios from "axios";
import FormData from "form-data";

export default function redirectRequest(redirectUrl) {
  return async (req, res, next) => {
    let updatedRedirectUrl = redirectUrl;
    if (req.params !== {}) {
      Object.entries(req.params).forEach(([key, value]) => {
        updatedRedirectUrl = updatedRedirectUrl.concat(`/${value}`);
      });
    }

    const formData = new FormData();

    if (req.headers["content-type"]?.split(";")[0] === "multipart/form-data") {
      Object.entries(req.body)?.forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value?.forEach((val) => {
            formData?.append(key + "[]", val);
          });
        } else {
          formData?.append(key, value);
        }
      });
      if (req.file) {
        formData.append("image", req.file.buffer, {
          filename: req.file.originalname,
        });
      }
      req?.files?.forEach((file) => {
        formData.append("images", file.buffer, { filename: file.originalname });
      });
    }

    try {
      const axiosResult = await axios({
        method: req.method,
        url: updatedRedirectUrl,
        data:
          req.headers["content-type"]?.split(";")[0] === "multipart/form-data"
            ? formData
            : req.body,
        params: req.query,
        headers: {
          "eazyrooms-token": req.headers["eazyrooms-token"],
          "Content-Type": req.headers["content-type"],
          locationId: req.headers["locationid"] ?? "",
          org: req.headers["org"] ?? "",
          botId: req.headers["botid"] ?? "",
        },
      });

      res.status(axiosResult?.status).json(axiosResult?.data);
    } catch (err) {
      console.log(err);
      res.status(err?.response?.status ?? 500).json(err?.response?.data ?? {});
    }
  };
}
