import Chat from "../components/inbox/Chat";

const InboxPage = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-10 space-y-4">
      <h1 className="my-6 text-2xl">Inbox</h1>

      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
};

export default InboxPage;
