export { };

declare global {

    type match = {
        id: number;
        opp: string;
        oppLogo: string;
        date: string;
        // time: match?.time,
        status: string;
        score: string;
    }

    type player = {
        id: number;
        firstname: string;
        lastname: string;
        nickname: string?;
        image: string;
        role: string;
    }
}