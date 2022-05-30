import React from 'react';

class YazilimcilarCokSey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastDigitOfBirthDay: '',
            monthWereBorn: '',
            lastDigitOfYearBirth: ''
        }

        this.selectChangeHandler = this.selectChangeHandler.bind(this)
    }

    lastDigitOfBirthDayMap = {
        '0': 'kazanıyor',
        '1': 'çalışıyor',
        '2': 'tatil yapıyor',
        '3': 'tatıyor',
        '4': 'uykusuz kalıyor',
        '5': 'saçmalıyor',
        '6': 'boş konuşuyor',
        '7': 'fedakarlık yapıyor',
        '8': 'çabuk sıkılıyor',
        '9': 'gereksiz tartışıyor',
    }
    monthWereBornMap = {
        '1': 'çalışıyor',
        '2': 'tatil yapıyor',
        '3': 'uyuyor',
        '4': 'uyumuyor',
        '5': 'saçmalıyor',
        '6': 'konuşuyor',
        '7': 'fedakar',
        '8': 'sıkılgan',
        '9': 'tartışıyor',
        '10': 'itiraz ediyor',
        '11': 'itaatkar',
        '12': 'müallim',
    }
    lastDigitOfYearBirthMap = {
        '0': 'hıryarlık',
        '1': 'dangalaklık',
        '2': 'hainlik',
        '3': 'kandırmaca',
        '4': 'aldatmaca',
        '5': 'sömürü',
        '6': 'hakları',
        '7': 'vicdansızlık',
        '8': 'delilik',
        '9': 'orta yolculuk',
    }

    selectChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    returnText = () => {
        const {lastDigitOfBirthDay, monthWereBorn, lastDigitOfYearBirth} = this.state
        if (lastDigitOfBirthDay === '' || monthWereBorn === '' || lastDigitOfYearBirth === '') {
            return 'Lütfen tüm alanları doldurunuz'
        } else {
            const getFirstText = this.lastDigitOfBirthDayMap[lastDigitOfBirthDay] || '__________'
            const getSecondText = this.monthWereBornMap[monthWereBorn] || '__________'
            const getThirdText = this.lastDigitOfYearBirthMap[lastDigitOfYearBirth] || '__________'
            return `Yazılımcılar çok ${getFirstText}. Bence yazılımcılar daha az ${getSecondText} olmalı. Bu resmen ${getThirdText}.`
        }
    }

    twitterShareButton = () => {
        let text = this.returnText()
        if (text !== 'Lütfen tüm alanları doldurunuz') {
            text += `\n https://www.yazilimcilarcoksey.com`
            const url = `https://twitter.com/intent/tweet?text=${text}`
            return <a href={url} target="_blank" rel="noreferrer" className="twitter-share-button">
                twitter da paylaş
            </a>
        }
    }

    render() {
        return (
            <div>
                <h1>Yazılımcılar çok sey</h1>
                <select name="lastDigitOfBirthDay" onChange={this.selectChangeHandler}>
                    <option value="">Doğum gününün son rakamı</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <select name="monthWereBorn" onChange={this.selectChangeHandler}>
                    <option value="">Doğduğun ay</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select name="lastDigitOfYearBirth" onChange={this.selectChangeHandler}>
                    <option value="">Doğum yılının son rakamı</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>

                <hr/>
                <span>
                    {this.returnText()}
                </span>
                <br/>
                {this.twitterShareButton()}
            </div>
        )
    }
}

export default YazilimcilarCokSey