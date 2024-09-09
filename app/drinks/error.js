"use client";

const error = (error) => {
  console.log(error);
  return (
    <div className="flex items-center justify-center">
      {error.error.message}
    </div>
  );
};

export default error;
