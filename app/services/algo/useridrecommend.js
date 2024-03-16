

const Useridrecommend = ({username}) => {
    function recommendUsernames(name) {
        if(!name || name.length <= 0){
            return []
        }
        const potentialUsernames = generateUsernames(name);
        return potentialUsernames
    }
    function generateUsernames(name) {
        const usernames = [];
        usernames.push(`${name.length}${name}`);
        usernames.push(`${name}${name.length}`);
       
    
        return usernames;
    }
    return (
      <>
            {recommendUsernames(username).map((username, index) => (
                <span className = "font-bold mx-1 p-2 border-[1px] border-Button text-Button rounded-full"id = {username} key={index}>{username}</span>
            ))}
       </>
   
    )
}

export default Useridrecommend
