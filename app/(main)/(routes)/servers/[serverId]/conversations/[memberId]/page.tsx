interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  };
}
const MemberIdPage = ({ params }: MemberIdPageProps) => {
  return <div>Member Id page</div>;
};
export default MemberIdPage;
