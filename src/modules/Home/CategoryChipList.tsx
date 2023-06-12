import { useEffect, useRef, useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import categoryServices from "../../api/category";
import { ICategoryItem } from "../../interfaces/category";
import videoServices from "../../api/video";

const CategoryChipList = () => {
  const theme = useTheme();

  const stackRef = useRef<HTMLDivElement>();

  const [categories, setCategories] = useState<ICategoryItem[]>([]);

  const [step, setStep] = useState<number>(0);
  const [isShowControl, setIsShowControl] = useState<boolean>(false);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [maxToScroll, setMaxToScroll] = useState<number>(0);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const { data } = await categoryServices.getList();
        setCategories(data.items);
        // const { data } = await videoServices.getVideos();
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryData();
  }, []);

  useEffect(() => {
    if (!stackRef.current) return;

    const childElements = stackRef.current.children;
    let totalLength = 0;

    if (childElements.length <= 0) {
      return;
    }

    totalLength += 12 * (childElements.length - 1);

    for (let i = 0; i < childElements.length; i++) {
      totalLength += childElements[i].clientWidth;
    }

    if (stackRef.current.offsetWidth < totalLength) {
      if (!isMobile) setIsShowControl(true);

      setStep(stackRef.current.children[0].clientWidth + 12);
      setMaxToScroll(stackRef.current.offsetWidth - totalLength);
    }
  }, [categories]);

  return (
    <Box
      sx={{
        position: "relative",
        mb: 3,
        overflow: "scroll",

        "&::-webkit-scrollbar": {
          display: "none",
        },

        "&:hover #scroll-control": {
          display: "block",
        },
      }}
    >
      <Stack
        component="div"
        direction="row"
        spacing={1.5}
        sx={{
          transform: `translateX(-${scrollWidth}px)`,
          transitionDuration: "0.3s",
        }}
        ref={stackRef as any}
      >
        {categories.map(category => (
          <Chip
            label={category.snippet.title}
            sx={{ height: 40, px: 1, borderRadius: 2 }}
            key={category.id}
          />
        ))}
      </Stack>

      {isShowControl && (
        <Box component="div" id="scroll-control" sx={{ display: "none" }}>
          {scrollWidth > 0 && (
            <IconButton
              sx={{ position: "absolute", top: 0, bottom: 0, left: 0, ml: 0 }}
              onClick={() => setScrollWidth(prev => prev - step * 2)}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          {Math.abs(maxToScroll) > scrollWidth && (
            <IconButton
              sx={{ position: "absolute", top: 0, bottom: 0, right: 0, ml: 0 }}
              onClick={() => setScrollWidth(prev => prev + step * 2)}
            >
              <ChevronRightIcon />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CategoryChipList;
