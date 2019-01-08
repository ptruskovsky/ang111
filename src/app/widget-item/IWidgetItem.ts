export interface IWidgetItem {
    img: string;
    id: string;
    address: string;
    phone:  number;
    shortDescription: string;
    weather: {
        title: string;
        icon: string;
        water: number;
        temperature: number
    };
    social_info: {
        title: string;
        img: string;
        followers: number;
        following: number;
    };
    type: string;
}