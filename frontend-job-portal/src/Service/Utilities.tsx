const formateDate = (dateString:string) => {
  const date = new Date(dateString);
  const options = { year: 'numeric' as const, month: 'short' as const };
  return date.toLocaleDateString('en-US', options);
}

function timeAgo(inputTime:string) {
    const time = new Date(inputTime);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - time.getTime()) / 1000);

    if (isNaN(seconds)) return "Invalid date";

    const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    if (seconds < 5) return "just now";
    if (seconds < 60) return `${seconds} seconds ago`;

    for (const [unit, value] of Object.entries(intervals)) {
        const count = Math.floor(seconds / value);
        if (count >= 1) {
            if (unit === "day" && count === 1) return "yesterday";
            return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
        }
    }
}


  const getBase64 = (file:any) => {
    return new Promise ((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }


export {formateDate, timeAgo, getBase64};