import { avatar } from "../assets"

const details = [
  {
    icon: "fa-location-dot",
    info: "West bengal",
    link: ""
  },
  {
    icon: "fa-globe",
    info: "https://portfolio-beige-eight-15.vercel.app/",
    link: "https://portfolio-beige-eight-15.vercel.app/"
  },
  {
    icon: "fa-brands fa-github",
    info: "Manish39x",
    link: "https://github.com/manish39x"
  }
]

const Profile = () => {
  return (
    <div className="bg-secondary p-[15px] rounded-[8px] w-full md:max-w-[23rem] flex flex-col gap-[15px]">
      <div className="profile-basic  flex gap-[15px]">
        <div className="avatar w-[5rem] aspect-square rounded-[8px] object-cover overflow-hidden flex-center bg-[#ffef5fab]">
          <img src={avatar[0]} alt="" className=" object-contain w-[4rem]" />
        </div>
        <div className="basic-info flex flex-col justify-between items-center py-[10px]">
          <div className="flex flex-col gap-[0px] ">
            <h4 className=" font-unique text-[16px] font-extrabold leading-3">Manish</h4>
            <span className="text-[12px] text-[#858da7]">Manish876</span>
          </div>
          <span className="text-[12px]">Foundation</span>
        </div>
      </div>
      <button className="btn py-[10px] w-full bg-[#ffef5f69] ">
        <span className="text-[#ffe600] font-unique text-[15px]">Edit Profile</span>
      </button>
      <div className="extra-details devide text-[#a8b7c7] flex-col flex gap-[10px]">
        {
          details.map(det => (
            <span key={det.info} className="location flex gap-[10px] items-center ">
              <i className={`fa-solid ${det.icon} text-[16px] flex-center p-[2px] w-[25px]`}></i>
              {
                det.link != "" ? 
                <a href={det.link} target="_blank" className="text-[13px]">{det.info}</a>
                :
                <span className="text-[14px]">{det.info}</span>
              }
            </span>
          ))
        }
      </div>

      <div className="activity-stats devide">
        <h3 className="font-unique font-bold">Activity Stats</h3>

        <div className="stats  py-[10px] flex justify-center">
          <span className="text-[#a8b7c7] text-[13px]">Nothing to Show</span>
        </div>
      </div>
      <div className="activity-stats devide">
        <h3 className="font-unique font-bold">Skills</h3>

        <div className="stats  py-[10px] flex justify-center">
          <span className="text-[#a8b7c7] text-[13px]">Nothing to Show</span>
        </div>
      </div>
      <div className="activity-stats devide">
        <h3 className="font-unique font-bold">Languages</h3>

        <div className="stats  py-[10px] flex justify-center">
          <span className="text-[#a8b7c7] text-[13px]">Nothing to Show</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
