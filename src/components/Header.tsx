import React from 'react';
import logo from '../assets/logo-abn-amro.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="d-flex">
    <div className="w-100">
      <div className="d-block ng-star-inserted">
            <div data-chrome="header-widget" className="ng-star-inserted">
               <div className="ng-tns-c139-4 ng-star-inserted">
                  <div className="abn-header ng-tns-c139-4">
                     <div className="header-wrapper ng-tns-c139-4">
                        
                        <div className="header clearfix ng-tns-c139-4">
                           <div className="header-content container ng-tns-c139-4">
                              <span className="cutout ng-tns-c139-4"></span>
                              <div  className="header-logo ng-tns-c139-4 logo-dotcom" >
                                 
                                 <span  className="abn-link">
                                    <a  className="clearfix link-style ng-star-inserted" href="/en/home">
                                       
                                       <div  className="ng-star-inserted">
                                          <img  alt="logo-lg-md" className="d-none d-sm-block ng-star-inserted" src={logo}/>
                                          <img  alt="logo-sm-xs" className="d-sm-none ng-star-inserted" src={logo}/>
                                       </div>
                                       
                                    </a>
                                    
                                 </span>
                              </div>
                              <div  className="right-content-wrapper row ng-tns-c139-4">
                                 <span  className="ng-tns-c139-4">
                                    <div  className="ng-tns-c139-4">
                                       <div  className="ng-star-inserted">
                                          <div _ngcontent-kgn-c135="">
                                             <div _ngcontent-kgn-c135="" className="dropdown ng-star-inserted">
                                                <div _ngcontent-kgn-c135="" className="selected-value">
                                                   <span _ngcontent-kgn-c135="" className="label ng-star-inserted">EN</span><i _ngcontent-kgn-c135="" className="icon-abn-exp-chevron down-rotation"></i>
                                                </div>
                                                <div _ngcontent-kgn-c135="" className="dropdown-content ng-star-inserted">
                                                   <p _ngcontent-kgn-c135="" className="dropdown-entry ng-star-inserted"> NL </p>
                                                   
                                                </div>
                                                
                                             </div>
                                             
                                          </div>
                                       </div>
                                       
                                    </div>
                                 </span>
                                 <span className="ng-tns-c139-4">
                                    <div className="ng-tns-c139-4 ng-star-inserted">
                                       <div  className="ng-star-inserted">
                                          <button  type="button" className="btn btn-primary">
                                             <i  className="ng-star-inserted"></i>
                                             <span className="ng-star-inserted">Log in</span>
                                          </button>
                                       </div>
                                    </div>
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div  role="navigation" className="navigation-wrapper ng-tns-c139-4">
                           <div  className="site-nav container clearfix ng-tns-c139-4">
                              <div  className="nav-links-wrapper ng-tns-c139-4">
                                 
                                 <span  className="nav-link nav-item-header ng-tns-c139-4 active-nav-link ng-star-inserted">
                                    <div  className="ng-tns-c139-4" >
                                       
                                       <span  className="abn-link inline-abn-link">
                                          <a  className="clearfix link-style ng-star-inserted" href="/en/home">
                                             <div  className="ng-star-inserted">
                                                
                                                <span   className="link-text ng-star-inserted" >
                                                   <div  className="ngx-ellipsis-inner">Home</div>
                                                </span>
                                                
                                             </div>
                                             
                                          </a>
                                          
                                       </span>
                                    </div>
                                 </span>  
                              </div>
                           </div>
                        </div>   
                     </div>
                  </div>
               </div>
            </div>
      </div>
   </div>
</div>
 
  );
}

export default Header;