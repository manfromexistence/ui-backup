import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import LaunchRounded from '@mui/icons-material/LaunchRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import Layers from '@mui/icons-material/Layers';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import KeyboardArrowLeftRounded from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import Item, { Group } from 'docs/src/components/action/Item';
import Highlighter from 'docs/src/components/action/Highlighter';
import { Link } from '@mui/docs/Link';
import More from 'docs/src/components/action/More';

export const DEMOS = ['Dashboard', 'Landing Pages', 'E-commerce'];

export const icons = {
  [DEMOS[0]]: <DashboardRounded fontSize="small" />,
  [DEMOS[1]]: <Layers fontSize="small" />,
  [DEMOS[2]]: <ShoppingBag fontSize="small" />,
};

export const TEMPLATES = {
  [DEMOS[0]]: [
    {
      name: 'Devias Kit Pro - Client & Admin Dashboard',
      author: 'Devias',
      src: {
        light: '/static/branding/store-templates/template-4light.jpg',
        dark: '/static/branding/store-templates/template-4dark.jpg',
      },
      href: 'https://mui.com/store/items/devias-kit-pro/',
    },
    {
      name: 'Minimal - Client & Admin Dashboard',
      author: 'Minimal',
      src: {
        light: '/static/branding/store-templates/template-1light.jpg',
        dark: '/static/branding/store-templates/template-1dark.jpg',
      },
      href: 'https://mui.com/store/items/minimal-dashboard/',
    },
    {
      name: 'Berry - React Material Admin Dashboard Template',
      author: 'CodedThemes',
      src: {
        light: '/static/branding/store-templates/template-5light.jpg',
        dark: '/static/branding/store-templates/template-5dark.jpg',
      },
      href: 'https://mui.com/store/items/berry-react-material-admin/',
    },
    {
      name: 'Mira Pro - React Material Admin Dashboard',
      author: 'Bootlab',
      src: {
        light: '/static/branding/store-templates/template-3light.jpg',
        dark: '/static/branding/store-templates/template-3dark.jpg',
      },
      href: 'https://mui.com/store/items/mira-pro-react-material-admin-dashboard/',
    },
  ],
  [DEMOS[1]]: [
    {
      name: 'theFront - Multipurpose Template + UI Kit',
      author: 'Maccarian',
      src: {
        light: '/static/branding/store-templates/template-2light.jpg',
        dark: '/static/branding/store-templates/template-2dark.jpg',
      },
      href: 'https://mui.com/store/items/the-front-landing-page/',
    },
    {
      name: 'Webbee Multipurpose Landing Page UI Kit',
      author: 'Maccarian',
      src: {
        light: '/static/branding/store-templates/template-6light.jpg',
        dark: '/static/branding/store-templates/template-6dark.jpg',
      },
      href: 'https://mui.com/store/items/webbee-landing-page/',
    },
  ],
  [DEMOS[2]]: [
    {
      name: 'Bazaar Pro - Multipurpose React Ecommerce Template',
      author: 'UI Lib',
      src: {
        light: '/static/branding/store-templates/template-bazar-light.jpg',
        dark: '/static/branding/store-templates/template-bazar-dark.jpg',
      },
      href: 'https://mui.com/store/items/bazar-pro-react-ecommerce-template/',
    },
  ],
};

function ActionArea(props: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      sx={[
        (theme) => ({
          width: { xs: 70, sm: 48 },
          height: { xs: 70, sm: 48 },
          position: 'absolute',
          top: 'calc(50% - 50px)',
          p: 1.5,
          color: (theme.vars || theme).palette.primary[500],
          bgcolor: '#FFF',
          border: '1px solid',
          borderColor: (theme.vars || theme).palette.primary[200],
          borderRadius: '50%',
          boxShadow: `0 4px 12px ${alpha(theme.palette.grey[500], 0.2)}`,
          transition: '0.2s',
          '& > svg': { transition: '0.2s' },
          '&.Mui-disabled': {
            opacity: 0,
          },
          '&:hover, &:focus': {
            '& > svg': { fontSize: 28 },
          },
          ...theme.applyDarkStyles({
            bgcolor: (theme.vars || theme).palette.primaryDark[900],
            borderColor: (theme.vars || theme).palette.primary[900],
            color: (theme.vars || theme).palette.primary[300],
            boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.2)}`,
          }),
        }),
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

export default function MaterialTemplates() {
  const [demo, setDemo] = React.useState(DEMOS[0]);
  const [templateIndex, setTemplateIndex] = React.useState(1);
  const templates = TEMPLATES[demo];

  return (
    <Section bg="gradient" cozy>
      <SectionHeadline
        alwaysCenter
        overline="Templates"
        title={
          <Typography variant="h2">
            The right template for your
            <br /> <GradientText>specific use case</GradientText>
          </Typography>
        }
        description="A carefully curated collection of gorgeous, fully functional templates."
      />
      <Group rowLayout desktopColumns={2} sx={{ p: 2 }}>
        {DEMOS.map((name) => (
          <Highlighter
            key={name}
            selected={name === demo}
            onClick={() => {
              setDemo(name);
              setTemplateIndex(0);
            }}
          >
            <Item
              icon={React.cloneElement(icons[name], name === demo ? { color: 'primary' } : {})}
              title={name}
              smallerIconDistance
            />
          </Highlighter>
        ))}
        <More
          component={Link}
          href="https://mui.com/store/?utm_source=marketing&utm_medium=referral&utm_campaign=material-templates-cta2#populars"
          noLinkStyle
        />
      </Group>
      <Box
        sx={{
          position: 'relative',
          mt: 3,
          minHeight: { xs: 240, sm: 320 },
          height: { xs: 260, sm: 400, md: 500 },
          mx: { xs: -2, sm: 0 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '50%',
            py: 2,
            transform: 'translate(0px, -50%)',
            '& > div': { px: '12%', overflow: 'unset !important' },
            '& .react-swipeable-view-container > div': {
              overflow: 'unset !important',
            },
          }}
        >
          <SwipeableViews
            springConfig={{
              duration: '0.6s',
              delay: '0s',
              easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
            }}
            index={templateIndex}
            resistance
            enableMouseEvents
            onChangeIndex={(index) => setTemplateIndex(index)}
          >
            {templates.map((item, index) => (
              <Box
                key={item.name}
                sx={(theme) => ({
                  overflow: 'auto',
                  borderRadius: 1,
                  height: { xs: 220, sm: 320, md: 500 },
                  backgroundImage: `url(${item.src.light})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  border: '1px solid',
                  borderColor: templateIndex === index ? 'primary.100' : 'divider',
                  boxShadow:
                    templateIndex === index
                      ? `0px 2px 12px ${alpha(theme.palette.primary[200], 0.3)}`
                      : undefined,
                  transition: '0.6s cubic-bezier(0.15, 0.3, 0.25, 1)',
                  transform: templateIndex !== index ? 'scale(0.92)' : 'scale(1)',
                  opacity: templateIndex === index ? 1 : 0.2,
                  ...theme.applyDarkStyles({
                    backgroundImage: `url(${item.src.dark})`,
                    borderColor: templateIndex === index ? 'primary.900' : 'divider',
                    boxShadow:
                      templateIndex === index
                        ? `0px 2px 8px ${alpha(theme.palette.primary[900], 0.4)}`
                        : undefined,
                  }),
                })}
              >
                <Link
                  href={`${item.href}?utm_source=marketing&utm_medium=referral&utm_campaign=templates-cta2`}
                  noLinkStyle
                  target="_blank"
                  sx={[
                    (theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 1,
                      transition: '0.2s',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      top: 0,
                      left: 0,
                      bgcolor: alpha(theme.palette.primary[50], 0.6),
                      backdropFilter: 'blur(4px)',
                      textDecoration: 'none',
                      '&:hover, &:focus': {
                        opacity: 1,
                      },
                      ...theme.applyDarkStyles({
                        bgcolor: alpha(theme.palette.primaryDark[900], 0.6),
                      }),
                    }),
                  ]}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.tertiary', fontWeight: 'semiBold', textAlign: 'center' }}
                  >
                    Developed by {templates[templateIndex].author}
                  </Typography>
                  <Typography
                    component="p"
                    variant="h6"
                    sx={{ fontWeight: 'semiBold', textAlign: 'center', color: 'text.primary' }}
                  >
                    {templates[templateIndex].name}
                  </Typography>
                  <Box
                    sx={[
                      (theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: 'primary.500',
                        ...theme.applyDarkStyles({
                          color: 'primary.200',
                        }),
                      }),
                    ]}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Buy now</Typography>
                    <LaunchRounded fontSize="small" />
                  </Box>
                </Link>
              </Box>
            ))}
          </SwipeableViews>
          {templates.length > 1 && (
            <React.Fragment>
              <ActionArea
                aria-label="Previous template"
                disabled={templateIndex === 0}
                onClick={() => setTemplateIndex((current) => Math.max(0, current - 1))}
                sx={{ left: 0, transform: 'translate(-50%)', justifyContent: 'flex-end' }}
              >
                <KeyboardArrowLeftRounded />
              </ActionArea>
              <ActionArea
                aria-label="Next template"
                disabled={templateIndex === templates.length - 1}
                onClick={() =>
                  setTemplateIndex((current) => Math.min(templates.length - 1, current + 1))
                }
                sx={{ right: 0, transform: 'translate(50%)', justifyContent: 'flex-start' }}
              >
                <KeyboardArrowRightRounded />
              </ActionArea>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </Section>
  );
}
