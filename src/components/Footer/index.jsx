import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
function Footer() {
    return (
        <footer className="footer">
            <div className="left-side-info">
                <div className="logo">
                    <img src="https://static-znews.zadn.vn/images/logo-zing-home.svg" className="img-logo"></img>
                </div>
                <div className="web-info-left" >
                    <p>Tạp chí điện tử Tri thức trực tuyến
                    <br/>
                    Cơ quan chủ quản: Hội Xuất bản Việt Nam
                    <br/>
                    Giấy phép báo chí: số 75/GP-BTTTT
                    <br/>
                    © 2021 Toàn bộ bản quyền thuộc Tri thức trực tuyến</p>

                </div>
            </div>
            <div className="right-side-info">
                <div className="web-info-right">
                    <p>Tòa soạn: Tầng 7,D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội
                        <br/>
                        Hotline: 0931.222.666 - Email: toasoan@zing.vn
                        <br/>
                        <a href="#">Liên hệ</a>
                        <a href="#">| Tuyển dụng</a>
                        <a href="#">| Quảng cáo</a>
                   
                    </p>
                  
                   
                </div>

            </div>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;