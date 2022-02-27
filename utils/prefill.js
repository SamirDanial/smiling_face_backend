const Information = require('../models/information');
const Model = require('../models/model');

const fillModel = async () => {
    const model1 = new Model({
        firstName: "Krista",
        lastName: "Howe",
        dateOfBirth: "1993-06-22",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://i.ytimg.com/an/LE8-4aRf5VQ/8095039638478078278_mq.jpg?v=601800c0"
    })

    const model2 = new Model({
        firstName: "Amira",
        lastName: "Black",
        dateOfBirth: "1990-05-08",
        braSize: 55,
        gender: "Female",
        castingPref: "newspapers",
        hairColor: "Black",
        hairLenght: 130,
        height: 181,
        profession: "Pilot",
        shoeSize: 41,
        waistSize: 60,
        weight: 58,
        picture: "https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Zainab-Shabbir-Actress-Model-456.jpg"
    })

    const model3 = new Model({
        firstName: "Bryant",
        lastName: "Adams",
        dateOfBirth: "1988-01-25",
        braSize: 60,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://superstarsbio.com/wp-content/uploads/2019/10/Mathira-Height-300x300.jpg"
    })

    const model4 = new Model({
        firstName: "Mia",
        lastName: "Lane",
        dateOfBirth: "1978-11-11",
        braSize: 85,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Software Enginner",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://static.turbosquid.com/Preview/001334/834/YN/_300.jpg"
    })

    const model5 = new Model({
        firstName: "Reilly",
        lastName: "Hubbard",
        dateOfBirth: "1992-04-09",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://www.whatsappimages.in/wp-content/uploads/2021/02/Beautiful-Girls-Whatsapp-DP-Profile-Images-wallpaper-photo-free-download-300x300.gif"
    })

    const model6 = new Model({
        firstName: "Cullen",
        lastName: "Grimes",
        dateOfBirth: "1989-12-13",
        braSize: 80,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/ananya-pandeys-hot-picture-201705-1495799868-300x300.jpg"
    })

    const model7 = new Model({
        firstName: "Dayami",
        lastName: "Jensen",
        dateOfBirth: "1989-02-13",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://im.rediff.com/300-300/movies/2022/feb/21huma-interview5.jpg"
    })

    const model8 = new Model({
        firstName: "Tania",
        lastName: "Paul",
        dateOfBirth: "1985-12-13",
        braSize: 70,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sandra-bullock-poses-for-a-sexy-picture-201706-1508223233-300x300.jpg"
    })

    const model9 = new Model({
        firstName: "Diego",
        lastName: "Ferguson",
        dateOfBirth: "1980-12-13",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://anmolideas.com/wp-content/uploads/2022/01/Wedding-Hairstyle-for-Girls-300x300.jpg"
    })

    const model10 = new Model({
        firstName: "Bernard",
        lastName: "Shannon",
        dateOfBirth: "1985-12-13",
        braSize: 65,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Red",
        hairLenght: 70,
        height: 151,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://punjabboutique.pk/wp-content/uploads/2021/06/111-300x300.jpg"
    })

    const model11 = new Model({
        firstName: "Sidney",
        lastName: "Floyd",
        dateOfBirth: "1989-7-23",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Black",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://punjabboutique.pk/wp-content/uploads/2021/06/111-300x300.jpg"
    })

    const model12 = new Model({
        firstName: "Jessie",
        lastName: "Brown",
        dateOfBirth: "1989-12-26",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://www.honeybees.com.pk/wp-content/uploads/2021/04/1625345453030-300x300.jpg"
    })

    const model13 = new Model({
        firstName: "Judith",
        lastName: "Bentley",
        dateOfBirth: "1986-07-03",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/ananya-pandeys-hot-picture-201705-1495799868-300x300.jpg"
    })

    const model14 = new Model({
        firstName: "Lola",
        lastName: "Vang",
        dateOfBirth: "1986-07-03",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://assets.entrepreneur.com/content/1x1/300/1632857394-123.jpeg"
    })

    const model15 = new Model({
        firstName: "Easton",
        lastName: "Rivera",
        dateOfBirth: "1982-07-03",
        braSize: 75,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://modelshave.com/wp-content/uploads/2022/02/ModelShave_Russia_013_02-300x300.jpg"
    })

    const model16 = new Model({
        firstName: "Jovani",
        lastName: "White",
        dateOfBirth: "2003-07-03",
        braSize: 75,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWP8S52uVlacjQ_hDjxhsBLK9YOdS2Xy-eg&usqp=CAU"
    })

    const model17 = new Model({
        firstName: "Baron",
        lastName: "Pruitt",
        dateOfBirth: "1986-11-03",
        braSize: 45,
        gender: "Female",
        castingPref: "movies",
        hairColor: "Brown",
        hairLenght: 70,
        height: 171,
        profession: "Math Teacher",
        shoeSize: 39,
        waistSize: 50,
        weight: 80,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MUsyZthLrzGkcb5EjlprUwx49Q_q6OPSdA&usqp=CAU"
    })



    const models = await Model.find();

    if (models.length === 0) {
        await model1.save();
        await model2.save();
        await model3.save();
        await model4.save();
        await model5.save();
        await model6.save();
        await model7.save();
        await model8.save();
        await model9.save();
        await model10.save();
        await model11.save();
        await model12.save();
        await model13.save();
        await model14.save();
        await model15.save();
        await model16.save();
        await model17.save();
    }
}

const fillInformation = async () => {
    const pictures = [
        { name: "Sara", path: "https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Zainab-Shabbir-Actress-Model-456.jpg" },
        { name: "Maria", path: "https://i.ytimg.com/an/LE8-4aRf5VQ/8095039638478078278_mq.jpg?v=601800c0" },
        { name: "Merlin", path: "https://superstarsbio.com/wp-content/uploads/2019/10/Mathira-Height-300x300.jpg" },
        { name: "Shadi", path: "https://static.turbosquid.com/Preview/001334/834/YN/_300.jpg" },
        { name: "Siba", path: "https://www.whatsappimages.in/wp-content/uploads/2021/02/Beautiful-Girls-Whatsapp-DP-Profile-Images-wallpaper-photo-free-download-300x300.gif" },
        { name: "Lida", path: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/ananya-pandeys-hot-picture-201705-1495799868-300x300.jpg" },
        { name: "Sima", path: "https://im.rediff.com/300-300/movies/2022/feb/21huma-interview5.jpg" },
        { name: "Victoria", path: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/sandra-bullock-poses-for-a-sexy-picture-201706-1508223233-300x300.jpg" },
        { name: "Vanisha", path: "https://anmolideas.com/wp-content/uploads/2022/01/Wedding-Hairstyle-for-Girls-300x300.jpg" },
        { name: "Malia", path: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Katie_Feeny.max-300x300.jpg" },
        { name: "Perianka", path: "https://punjabboutique.pk/wp-content/uploads/2021/06/111-300x300.jpg" },
        { name: "Pretty", path: "https://www.honeybees.com.pk/wp-content/uploads/2021/04/1625345453030-300x300.jpg" },
        { name: "Nizyan", path: "https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Muslim-Girls-DP-for-WhatsApp-Free-Download-300x300.jpg" },
        { name: "Arzu", path: "https://assets.entrepreneur.com/content/1x1/300/1632857394-123.jpeg" },
        { name: "Nasrin", path: "https://modelshave.com/wp-content/uploads/2022/02/ModelShave_Russia_013_02-300x300.jpg" },
        { name: "Simin", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWP8S52uVlacjQ_hDjxhsBLK9YOdS2Xy-eg&usqp=CAU" },
        { name: "Asenat", path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MUsyZthLrzGkcb5EjlprUwx49Q_q6OPSdA&usqp=CAU" },
    ];
    const informationData = await Information.find();

    if (informationData.length === 0) {
        const information = new Information({
            braSize: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
            castingPref: ["movies", "commercials", "newspapers", "magazines"],
            gender: ["Male", "Female", "Unknown"],
            hairColor: ["Black", "Brown", "White", "Red", "Dark"],
            hairLenght: lengthGenerator(0, 200),
            height: lengthGenerator(150, 220),
            profession: ["Software Enginner", "Math Teacher", "Pilot", "Soccer"],
            shoeSize: lengthGenerator(32, 47),
            waistSize: lengthGenerator(45, 120),
            weight: lengthGenerator(43, 120),
            picture: pictures
        })

        await information.save();
    }
}

const lengthGenerator = (from, end) => {
    const finalLenght = [];
    for (let i = from; i <= end; i++) {
        finalLenght.push(i);
    }
    return finalLenght
}

module.exports = {
    fillInformation,
    fillModel
}