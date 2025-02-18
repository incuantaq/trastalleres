import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
}: {
  name: string;
}) {
  return (
    <div className="flex items-center">
      {/* keeping this in case we want to go back to author pic feature */}
      {/* <div className="mr-4 w-12 h-12">
        {
          picture && 
          <ContentfulImage
            alt={name}
            className="object-cover h-full rounded-full"
            height={48}
            width={48}
            src={picture.url}
          />
        }
      </div> */}
      <div className="text-md font-bold"> por {name}</div>
    </div>
  );
}
