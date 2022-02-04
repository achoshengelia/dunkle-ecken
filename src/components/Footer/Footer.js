import { Link } from "react-router-dom";
import { Center } from "../../styles";
import { Line, Container, List, Content, Mobile } from "./FooterStyles";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Center>
          <Line />
          <Mobile>
            <Content>
              <p>© 2021. All rights reserved</p>
              <List>
                <li>
                  <a
                    className="pointer"
                    href="https://www.instagram.com/dunkleecken/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="pointer"
                    href="https://www.facebook.com/LanaLive"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <Link to="/imprint" className="pointer">
                    {t("footer.imprint")}
                  </Link>
                </li>
              </List>
            </Content>
          </Mobile>
        </Center>
      </Container>
    </>
  );
};
