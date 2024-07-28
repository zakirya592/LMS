import React, { useEffect, useState } from "react";
import "./DropDownSelection.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../../utils/userRequest";

const DropDownSelection = () => {
  const [megaMenu, setMegaMenu] = useState([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { isLoading, data, error } = useQuery("fetchAllMegaMenus", async () => {
    try {
      const response = await newRequest.get("/mega_menu_categories_frontSide");
      // console.log('Menu', response.data);
      return response?.data || [];
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

  const datadropdown = [
    {
      name_en: "Products",
      mega_menu_categories: [
        {
          category_name_en: "Our Technology",
          url: "our-technology",
          footer_menus: [
            {
              category_name_en: "Your Needs",
              url: "your-needs",
            },
          ],
        },
        {
          category_name_en: "Barcode Labels",
          url: "barcode-labels",
          footer_menus: [],
        },
      ],
    },
    {
      name_en: "Solutions",
      mega_menu_categories: [
        {
          category_name_en: "Our Technology",
          url: "our-technology",
          footer_menus: [
            {
              category_name_en: "Your Needs",
              url: "your-needs",
            },
          ],
        },
        {
          category_name_en: "Barcode Labels",
          url: "barcode-labels",
          footer_menus: [],
        },
      ],
    },
    {
      name_en: "Industries",
      mega_menu_categories: [
        {
          category_name_en: "Our Technology",
          url: "our-technology",
          footer_menus: [
            {
              category_name_en: "Your Needs",
              url: "your-needs",
            },
          ],
        },
        {
          category_name_en: "Barcode Labels",
          url: "barcode-labels",
          footer_menus: [],
        },
      ],
    },
    {
      name_en: "Resources",
      mega_menu_categories: [
        {
          category_name_en: "Our Technology",
          url: "our-technology",
          footer_menus: [
            ,
            {
              category_name_en: "Your Needs",
              url: "your-needs",
            },
          ],
        },
        {
          category_name_en: "Barcode Labels",
          url: "barcode-labels",
          footer_menus: [
            {
              category_name_en: "Your Needs",
              url: "your-needs",
            },
          ],
        },
      ],
    },
    {
      name_en: "Pricing",
      mega_menu_categories: [],
    },
  ];

  return (
    <header className="header">
      <div className="container menu-container">
        <div className="row v-center">
          {/* Logo */}
          {/* <div className="header-item item-left">
          <div className="logo">
            <a href="#">My Store</a>
          </div>
        </div> */}

          {/* Menu Start */}
          <div className="header-item item-center">
            <div className="menu-overlay" onClick={toggleMobileMenu}></div>
            <nav
              className={`menu ${isMobileMenuOpen ? "active" : ""}`}
              style={{ backgroundColor: "white" }}
            >
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i
                    className="fa fa-angle-left"
                    onClick={toggleMobileMenu}
                  ></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close" onClick={toggleMobileMenu}>
                  &times;
                </div>
              </div>
              <ul
                className={`menu-main flex-row 2xl:flex xl:flex lg:flex 3xl:flex 3xl:justify-center 3xl:items-center 2xl:justify-center xl:justify-center lg:justify-center 2xl:items-center xl:items-center lg:items-center sm:gap-10`}
              >
                {datadropdown?.map((section, index) => (
                  <li key={index} className="menu-item-has-children">
                    <Link
                      to="javascript:void(0)"
                      style={{ textDecoration: "none" }}
                    >
                      {/* {section.name_en} */}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: section?.name_en,
                        }}
                      />
                      {/* {i18n.language === "ar" ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: section?.name_ar,
                          }}
                        />
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: section?.name_en,
                          }}
                        />
                      )} */}
                      &nbsp;
                      <i className="fa fa-angle-down"></i>
                    </Link>
                    <div
                      className={`sub-menu mega-menu mega-menu-column-4 text-blue-600 `}
                    >
                      {section.mega_menu_categories.map(
                        (category, catIndex) => (
                          <div
                            key={catIndex}
                            className="list-item"
                            style={{ textAlign: "justify" }}
                          >
                            {/* <Link to={category.url} style={{ textDecoration: 'none' }}> */}
                            <Link
                              to={`/${category.url}`}
                              style={{ textDecoration: "none" }}
                            >
                              {category.category_name_en}
                              {/* {i18n.language === "ar"
                                ? category?.category_name_ar
                                : category?.category_name_en} */}
                            </Link>
                            <ul>
                              {category.footer_menus.map(
                                (subcategory, subIndex) => (
                                  <li key={subIndex}>
                                    {/* <Link to={subcategory.url} style={{ textDecoration: 'none' }}> */}
                                    <Link
                                      to={`/${subcategory.url}`}
                                      style={{ textDecoration: "none" }}
                                    >
                                      {subcategory?.category_name_en}
                                      {/* {i18n.language === "ar"
                                        ? subcategory?.category_name_ar
                                        : subcategory?.category_name_en} */}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Menu End */}

          {/* Right items */}
          {/* <div className="header-item item-right">
          <a href="#">
            <i className="fa fa-search"></i>
          </a>
          <a href="#">
            <i className="fa fa-heart"></i>
          </a>
          <a href="#">
            <i className="fa fa-shopping-cart"></i>
          </a> */}
          {/* Mobile Menu Trigger */}
          <div className="mobile-menu-trigger" onClick={toggleMobileMenu}>
            <span></span>
          </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default DropDownSelection;
