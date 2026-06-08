import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-content-center">
      <Spinner />
      <p className="text-xl text-primary-100 text-center">
        Loading Cabin Data...
      </p>
    </div>
  );
}
