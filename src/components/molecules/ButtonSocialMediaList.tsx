import { socialMedia } from "@/constant/social-media";
import ButtonSocialMediaItem from "../atoms/ButtonSocialMediaItem";

export default function ButtonSocialMediaList() {
  return (
    <div className="mt-3 flex items-center gap-4">
      {socialMedia.map(({ id, name, link, logo }) => (
        <ButtonSocialMediaItem key={id} name={name} link={link} logo={logo} />
      ))}
    </div>
  );
}
