import PinIcon from "../assets/images/pin-icon.svg";

function Card(props) {
  const {
    id,
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;

  return (
    <div className=" flex flex-col sm:flex-row gap-5 text-primary max-w-xs sm:max-w-[32.875rem] pb-5 border-b border-clrBorder">
      <img
        src={imageUrl}
        alt={`${title} image`}
        className="w-full sm:w-32 h-44 object-cover rounded-md"
      />

      <div className="flex flex-col items-start justify-center gap-3 text-xs">
        <div className="flex flex-col gap-2">
          <div className=" flex gap-3">
            <div className="flex gap-1 items-center justify-center">
              <img src={PinIcon} alt="" className="w-2" />
              <h3 className=" uppercase tracking-[0.1875em]">{location}</h3>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              className=" text-secondary underline"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className=" text-2xl font-bold">{title}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">
            <span>{startDate}</span> - <span>{endDate}</span>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
