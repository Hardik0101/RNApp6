const GOOGLE_API_KEY = "AIzaSyBfg1TN532nV0zX8xgER6tW0xMBwE1TxqM";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=100x100&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  console.log("url...", imagePreviewUrl);
  return imagePreviewUrl;
}
