import SignUpGuide from "./home-signup-guid";

export default function JoinNow() {
  return (
    <section className="lg:sections-gutter-y">
      <div className="max-w-6xl mx-auto p-2 lg:p-0">
        <div>
          <h2 className="text-[#04494C] font-[900] text-xl tracking-normal text-center uppercase mb-2 lg:mb-5 lg:text-3xl">
            You can join 8k8 right away after an easy signup.
          </h2>
          <p>
            It is easy, quick, and doesn&lsquo;t take any time to start playing
            at 8k8 Casino. Whether you&lsquo;ve played at online casinos before
            or this is your first time, our simple signup process will get you
            right into the action right away. You can become a part of 8k8 and
            start playing fun real money games right away by following these
            steps:
          </p>
        </div>
        <div>
          <SignUpGuide />
        </div>
      </div>
    </section>
  );
}
