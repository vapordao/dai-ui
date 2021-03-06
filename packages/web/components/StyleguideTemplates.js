/** @jsx jsx */
import React from 'react';
import {
  jsx,
  Button,
  Badge,
  Alert,
  Text,
  Box,
  Flex,
  Grid,
  Link,
  Card,
  Label,
  Input,
  Textarea,
  Select,
  Slider,
  Checkbox,
  Radio,
  Heading,
  useThemeUI,
  Styled,
} from 'theme-ui';

const WrappedButton = ({ variants }) => {
  const disabledBlacklist = ['textual'];
  return (
    <Grid columns={4}>
      {Object.keys(variants).map((variant) => {
        return (
          <Card
            key={variant}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Flex
              sx={{
                mb: 'auto',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Button variant={variant} sx={{ mb: 2 }}>
                Click Me!
              </Button>
              {!disabledBlacklist.includes(variant) && (
                <Button disabled variant={variant}>
                  Click Me!
                </Button>
              )}
            </Flex>
            <Box mt={3}>
              <Text variant="boldBody">{variant}</Text>
              <Styled.code
                className="language-js"
                sx={{ py: 0, px: 1, fontSize: 1 }}
              >{`<Button variant="${variant}" />`}</Styled.code>
            </Box>
          </Card>
        );
      })}
    </Grid>
  );
};

const WrappedForms = ({ variants }) => {
  const varToComp = (v) => {
    const c = (s, vv) => s.indexOf(vv) === 0;
    if (c(v, 'input')) {
      return [<Input variant={v}></Input>, `<Input variant={${v}}></Input>`];
    } else if (c(v, 'label')) {
      return [
        <Label variant={v}>I'm a label</Label>,
        `<Label variant={${v}}>I'm a label</Label>`,
      ];
    } else if (c(v, 'textarea')) {
      return [
        <Textarea variant={v} defaultValue="Hello"></Textarea>,
        `<Textarea variant={${v}}>Hello</Textarea>`,
      ];
    } else if (c(v, 'select')) {
      return [
        <Select defaultValue="Hello" variant={v} sx={{ width: 6 }}>
          <option>Hello</option>
          <option>Hi</option>
          <option>Beep</option>
          <option>Boop</option>
        </Select>,
        ` <Select defaultValue="Hello" variant={${v}}>
      <option>Hello</option>
    </Select>`,
      ];
    } else if (c(v, 'checkbox')) {
      return [
        <Flex>
          {' '}
          <Checkbox></Checkbox>
          <Checkbox defaultChecked={true} variant={v}></Checkbox>
        </Flex>,
        ` <Checkbox defaultChecked={true} variant={${v}}></Checkbox>`,
      ];
    } else if (c(v, 'radio')) {
      return [
        <Flex>
          {' '}
          <Radio></Radio>
          <Radio defaultChecked={true} variant={v}></Radio>
        </Flex>,
        ` <Checkbox defaultChecked={true} variant={${v}}></Checkbox>`,
      ];
    } else if (c(v, 'slider')) {
      return [
        <Flex>
          {' '}
          <Slider variant={v}></Slider>
        </Flex>,
        ` <Slider variant={${v}}></Slider>`,
      ];
    } else {
      return [];
    }
  };

  return (
    <Grid columns={4}>
      {Object.keys(variants).map((variant) => {
        const res = varToComp(variant);
        return (
          <Card
            key={variant}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Flex
              sx={{
                mb: 'auto',
              }}
            >
              {res[0]}
            </Flex>
            <Box mt={3}>
              <Text variant="boldBody">{variant}</Text>
              <Styled.code
                className="language-js"
                sx={{ py: 0, px: 1, fontSize: 1 }}
              >
                {res[1]}
              </Styled.code>
            </Box>
          </Card>
        );
      })}
    </Grid>
  );
};

const WrappedBadge = ({ variants }) => {
  return (
    <Grid columns={4}>
      {Object.keys(variants).map((variant) => {
        return (
          <Flex
            key={variant}
            sx={{
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Flex
              sx={{
                mb: 'auto',
              }}
            >
              <Badge variant={variant}> Winning Proposal </Badge>
            </Flex>
            <Box mt={3}>
              <Text variant="boldBody">{variant}</Text>
              <Styled.code
                className="language-js"
                sx={{ py: 0, px: 1, fontSize: 1 }}
              >{`<Badge variant="${variant}" />`}</Styled.code>
            </Box>
          </Flex>
        );
      })}
    </Grid>
  );
};

const WrappedAlert = ({ variants }) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {Object.keys(variants).map((variant) => {
        return (
          <Box
            key={variant}
            sx={{
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              // mb: 2,
              p: 3,
            }}
          >
            <Flex
              sx={{
                mb: 'auto',
                width: '100%',
              }}
            >
              <Alert variant={variant}> This is an alert message </Alert>
            </Flex>
            <Box mt={2}>
              <Text variant="boldBody">{variant}</Text>
              <Styled.code
                className="language-js"
                sx={{ py: 0, px: 1, fontSize: 1 }}
              >{`<Alert variant="${variant}" />`}</Styled.code>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const WrappedText = ({ variants }) => {
  return (
    <Grid columns={2}>
      {Object.keys(variants).map((variant) => {
        return (
          <Card key={variant}>
            <Text variant={variant} mb="auto">
              Hello World
            </Text>

            <Box mt={3}>
              <Text sx={{ fontWeight: 'semiBold' }}>{variant}</Text>
              <Styled.code
                className="language-js"
                sx={{ py: 0, px: 1, fontSize: 1 }}
              >{`<Text variant="${variant}" />`}</Styled.code>
            </Box>
          </Card>
        );
      })}
    </Grid>
  );
};

const WrappedLinks = ({ variants }) => {
  return (
    <Grid columns={2}>
      {Object.keys(variants).map((variant) => {
        return (
          <Flex
            key={variant}
            sx={{
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Link variant={variant}>Anchors are a page&apos;s best friend</Link>

            <Box>
              <Text variant="boldBody">{variant}</Text>
              <Styled.code
                className="language-js"
                sx={{ py: 0, px: 1, fontSize: 1 }}
              >{`<Link variant="${variant}" />`}</Styled.code>
            </Box>
          </Flex>
        );
      })}
    </Grid>
  );
};

const WrappedColors = ({ variants }) => {
  let keys = Object.keys(variants);

  const mainWhitelist = [
    'primary',
    'secondary',
    'background',
    'surface',
    'muted',
    'error',
    'notice',
    'success',
    'warning',
  ];

  // disable handling modes, TO DO as for now it is breaking the app
  const mainBlacklist = ['modes'];

  const filtered = keys.reduce(
    (p, n) => {
      if (n.indexOf('on') === 0 || n.includes('text')) {
        p.typography.push(n);
      } else if (mainWhitelist.find((base) => n.indexOf(base) === 0)) {
        p.main.push(n);
      } else if (mainBlacklist.find((base) => n.indexOf(base) === 0)) {
        return p;
      } else {
        p.other.push(n);
      }
      return p;
    },
    { main: [], typography: [], other: [] }
  );
  return (
    <Box>
      {Object.keys(filtered).map((k) => {
        return (
          <Box key={k}>
            <Heading
              variant="h2"
              sx={{
                mt: 4,
                mb: 3,
                ml: 1,
                textTransform: 'capitalize',
              }}
            >
              {k}
            </Heading>

            <Grid columns={4}>
              {filtered[k].map((kk) => (
                <Grid gap={2} columns={1} p={2} key={kk}>
                  <Box
                    sx={{
                      width: 6,
                      height: 4,
                      bg: kk,
                    }}
                  ></Box>
                  <Box>
                    <Text
                      sx={{ textTransform: 'capitalize' }}
                      variant="boldBody"
                    >
                      {kk}
                    </Text>
                    <Text variant="boldBody">{variants[kk]}</Text>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

const WrappedSizes = ({ variants }) => {
  return (
    <Grid
      columns={'repeat(9,auto)'}
      sx={{
        overflow: 'hidden',
      }}
    >
      {Object.keys(variants).map((variant) => {
        return (
          <Grid gap={2} columns={1} p={2} key={variant}>
            <Box
              sx={{
                width: variant,
                height: 3,
                bg: 'primary',
              }}
            ></Box>
            <Box>
              <Text variant="boldBody">{variant}</Text>
              <Text variant="boldBody">{variants[variant]}px</Text>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

const WrappedRadii = ({ variants }) => {
  return (
    <Grid columns={6}>
      {Object.keys(variants).map((variant) => {
        return (
          <Grid gap={2} columns={1} p={2} key={variant}>
            <Box
              sx={{
                width: 5,
                height: 4,
                borderRadius: variant,
                bg: 'primary',
              }}
            ></Box>
            <Box>
              <Text variant="boldBody">{variant}</Text>
              <Text variant="boldBody">{variants[variant]}px</Text>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

const WrappedShadows = ({ variants }) => {
  const { theme } = useThemeUI();
  const parse = (val) => (typeof val === 'function' ? val(theme) : val);
  return (
    <Grid columns={4}>
      {Object.keys(variants).map((variant) => {
        return (
          <Grid gap={2} columns={1} p={2} key={variant}>
            <Box
              sx={{
                width: 5,
                height: 4,
                boxShadow: theme.shadows[variant],
                bg: 'primary',
              }}
            ></Box>
            <Box>
              <Text variant="boldBody">{variant}</Text>
              <Text variant="boldBody">{parse(variants[variant])}</Text>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

const WrappedFontSizes = ({ variants }) => {
  return (
    <Grid columns={'repeat(12, auto)'}>
      {Object.keys(variants).map((variant) => {
        return (
          <Grid gap={2} columns={1} p={2} key={variant}>
            <Box>
              <Text variant="boldBody">{variant}</Text>
              <Text
                variant="boldBody"
                sx={{
                  fontSize: variant,
                }}
              >
                {variants[variant]}px
              </Text>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

const WrappedFonts = ({ variants }) => {
  return (
    <Grid columns={1}>
      {Object.keys(variants).map((variant) => {
        return (
          <Grid gap={2} columns={1} p={2} key={variant}>
            <Box>
              <Text variant="boldBody">{variant}</Text>
              <Text
                variant="boldBody"
                sx={{
                  fontSize: 6,
                  fontFamily: variant,
                }}
              >
                {variants[variant]}
              </Text>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

const WrappedGradients = ({ variants }) => {
  return (
    <Grid columns={4}>
      {Object.keys(variants).map((variant) => (
        <Card key={variant}>
          <Box
            variant={`gradients.${variant}`}
            sx={{
              cursor: 'pointer',
              height: 6,
            }}
          ></Box>
          <Box mt={3}>
            <Text variant="boldBody">{variant}</Text>
            <Styled.code
              sx={{ p: 0, fontSize: 1 }}
            >{`<Box variant="gradients.${variant}" />`}</Styled.code>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export const themeTemplateMapping = {
  buttons: (variant, variants) => (
    <WrappedButton variant={variant} variants={variants} />
  ),
  forms: (variant, variants) => (
    <WrappedForms variant={variant} variants={variants} />
  ),
  badges: (variant, variants) => (
    <WrappedBadge variant={variant} variants={variants} />
  ),
  alerts: (variant, variants) => (
    <WrappedAlert variant={variant} variants={variants} />
  ),
  text: (variant, variants) => (
    <WrappedText variant={variant} variants={variants} />
  ),
  links: (variant, variants) => (
    <WrappedLinks variant={variant} variants={variants} />
  ),
  colors: (variant, variants) => (
    <WrappedColors variant={variant} variants={variants} />
  ),
  radii: (variant, variants) => (
    <WrappedRadii variant={variant} variants={variants} />
  ),
  fontSizes: (variant, variants) => (
    <WrappedFontSizes variant={variant} variants={variants} />
  ),
  fonts: (variant, variants) => (
    <WrappedFonts variant={variant} variants={variants} />
  ),
  shadows: (variant, variants) => (
    <WrappedShadows variant={variant} variants={variants} />
  ),
  sizes: (variant, variants) => (
    <WrappedSizes variant={variant} variants={variants} />
  ),
  gradients: (variant, variants) => (
    <WrappedGradients variant={variant} variants={variants} />
  ),
};
