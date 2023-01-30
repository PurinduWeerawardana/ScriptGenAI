import {
  Card,
  Button
} from "@material-tailwind/react";
import uploadIcon from "../static/images/upload-icon.png";

export default function UploadCard() {
  return (
    <Card className="w-9/12 h-96 m-auto">
      <Card className="bg-lightPurple m-6 h-full">
        <img src={uploadIcon} alt="" className="w-24 m-auto" />
        <Button
            variant="gradient"
            color="deep-purple"
            size="md"
            className="mb-6 mx-10 rounded-full"
            onClick={() => {
              window.location.href = "#";
            }}
          >
            <span>Upload</span>
          </Button>
      </Card>
    </Card>
  );
}
