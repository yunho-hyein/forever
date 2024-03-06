import React from "react";
import styled from "@emotion/styled";

import Masonry from "@mui/lab/Masonry";

export default function Main() {
  return (
    <Wrap>
      <ImageWrap>
        <img
          src="https://yunho-hyein.github.io/forever/images/main_img.png"
          alt="메인 사진"
        />
      </ImageWrap>
      <ImageWrap $marginTop="70" $imgSize="70" $mobileMarginTop="50">
        <img
          src="https://yunho-hyein.github.io/forever/images/main_date.svg"
          alt="date"
        />
      </ImageWrap>
      <ImageWrap $marginTop="40" $imgSize="120" $mobileMarginTop="20">
        <img
          src="https://yunho-hyein.github.io/forever/images/main_name.svg"
          alt="name"
        />
      </ImageWrap>
      <ImageWrap $marginTop="470" $mobileMarginTop="205">
        <img
          src="https://yunho-hyein.github.io/forever/images/weddingday.png"
          alt="wedding day"
        />
      </ImageWrap>
      <ImageWrap $marginTop="100" $imgSize="200">
        <img
          src="https://yunho-hyein.github.io/forever/images/calendar.png"
          alt="calendar"
        />
      </ImageWrap>
      <Text $marginTop="160" $mobileMarginTop="60">
        모든 날을 함께 하고 싶은
        <br />
        소중한 사람을 만났습니다.
      </Text>
      <Text $marginTop="50" $mobileMarginTop="20">
        사월의 어느 봄날,
        <br />
        마음을 담아 초대합니다.
      </Text>
      <Text $marginTop="80" $mobileMarginTop="50">
        최용길 박복희의 차남 최윤호
        <br />
        이장영 박수정의 장녀 이혜인
      </Text>
      <Text $marginTop="80" $mobileMarginTop="40">
        2024년 4월 27일 토요일 12시
        <br />
        성북동 키나
      </Text>
      <ImageWrap $marginTop="80" $mobileMarginTop="80" $maxWidth="1070">
        <img
          src="https://yunho-hyein.github.io/forever/images/video.gif"
          alt="video"
        />
      </ImageWrap>
      <Border>
        <div></div>
      </Border>
      <Text $marginTop="180" $mobileMarginTop="80">
        오시는 길
      </Text>
      <ImageWrap $marginTop="120" $mobileMarginTop="50">
        <img
          src="https://yunho-hyein.github.io/forever/images/map.png"
          alt="지도"
        />
      </ImageWrap>
      <SubText>
        주소
        <br />
        서울특별시 성북구 선잠로 46 (성북동 31-1)
        <br />
        T. 02-764-4580
        <br />
        <br />
        <br />
        대중교통
        <br />
        [지하철] 한성대입구역 6번 출구에서 50m 직진
        <br />
        [버스] 성북02 삼선교, 성북문화원역 승차 → 성북빌리지역 하차
        <br />
        <br />
        <br />
        주차
        <br />
        무료발렛으로 외부 주차장에 주차됩니다.
        <br />
      </SubText>
      <GreyText>
        식장 사정으로 화환 반입이 불가하여 화환은 정중히 사양합니다.
        <br />
        축하해주시는 마음만 감사히 받겠습니다.
      </GreyText>
      <GridWrap>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {[10, 29, 39, 5, 23].map((height, index) => (
            <img
              key={index}
              src={`https://yunho-hyein.github.io/forever/images/photo0${
                index + 1
              }.jpg`}
              alt="사진"
            />
          ))}
        </Masonry>
      </GridWrap>

      <Border>
        <div></div>
      </Border>
      <Text $marginTop="150" $mobileMarginTop="80">
        연락처
      </Text>
      <Phone></Phone>
    </Wrap>
  );
}

const Phone = styled.div``;

const GridWrap = styled.div`
  padding: 0 100px;
  margin-top: 260px;
  @media only screen and (max-width: 900px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 3px 0 10px;
    margin-top: 120px;
  }
`;

const GreyText = styled.div`
  margin-top: 100px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #00000080;
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 0 10px;
  }
`;

const SubText = styled.div`
  margin-top: 130px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 600px) {
    margin-top: 70px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 0 10px;
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: center;
  margin: 130px auto 0;
  div {
    background-color: #d0d5dd;
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    margin: 60px auto 0;
  }
`;

const Text = styled.div`
  margin-top: ${(props) => props.$marginTop}px;
  font-size: 24px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin-top: ${(props) => props.$mobileMarginTop}px;
    padding: 0 10px;
    line-height: 40px;
  }
`;

const ImageWrap = styled.div`
  margin-top: ${(props) => props.$marginTop}px;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 80%;
    max-width: ${(props) => props.$maxWidth}px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: ${(props) => props.$mobileMarginTop}px;
    img {
      max-width: 90%;
      max-width: ${(props) => props.$imgSize}px;
    }
  }
`;

const Wrap = styled.div`
  font-family: "YES24MyoungjoR";
  padding-top: 230px;
  background-image: url("https://yunho-hyein.github.io/forever/images/background.jpeg");
  width: 100%;
  @media only screen and (max-width: 600px) {
    padding-top: 100px;
  }
`;
