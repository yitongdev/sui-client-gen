import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { Decimal } from "../../decimal/structs/index.js";
import { RateLimiterConfig as RateLimiterConfig1 } from "./RateLimiterConfig.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRateLimiter(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::rate_limiter::RateLimiter`;
}

export interface RateLimiterFields {
  config: ToField<RateLimiterConfig1>;
  prevQty: ToField<Decimal>;
  windowStart: ToField<"u64">;
  curQty: ToField<Decimal>;
}

export type RateLimiterReified = Reified<RateLimiter, RateLimiterFields>;

/**
 * Move struct: `RateLimiter`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::rate_limiter`
 */
export class RateLimiter implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::rate_limiter::RateLimiter`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = RateLimiter.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::rate_limiter::RateLimiter`;
  readonly $typeArgs: [];
  readonly $isPhantom = RateLimiter.$isPhantom;

  readonly config: ToField<RateLimiterConfig1>;
  readonly prevQty: ToField<Decimal>;
  readonly windowStart: ToField<"u64">;
  readonly curQty: ToField<Decimal>;

  private constructor(typeArgs: [], fields: RateLimiterFields) {
    this.$fullTypeName = composeSuiType(
      RateLimiter.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::rate_limiter::RateLimiter`;
    this.$typeArgs = typeArgs;

    this.config = fields.config;
    this.prevQty = fields.prevQty;
    this.windowStart = fields.windowStart;
    this.curQty = fields.curQty;
  }

  static reified(): RateLimiterReified {
    return {
      typeName: RateLimiter.$typeName,
      fullTypeName: composeSuiType(
        RateLimiter.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::rate_limiter::RateLimiter`,
      typeArgs: [] as [],
      isPhantom: RateLimiter.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        RateLimiter.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RateLimiter.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => RateLimiter.fromBcs(data),
      bcs: RateLimiter.bcs,
      fromJSONField: (field: any) => RateLimiter.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => RateLimiter.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RateLimiter.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RateLimiter.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        RateLimiter.fetch(client, id),
      new: (fields: RateLimiterFields) => {
        return new RateLimiter([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RateLimiter.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<RateLimiter>> {
    return phantom(RateLimiter.reified());
  }
  static get p() {
    return RateLimiter.phantom();
  }

  static get bcs() {
    return bcs.struct("RateLimiter", {
      config: RateLimiterConfig1.bcs,
      prev_qty: Decimal.bcs,
      window_start: bcs.u64(),
      cur_qty: Decimal.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): RateLimiter {
    return RateLimiter.reified().new({
      config: decodeFromFields(RateLimiterConfig1.reified(), fields.config),
      prevQty: decodeFromFields(Decimal.reified(), fields.prev_qty),
      windowStart: decodeFromFields("u64", fields.window_start),
      curQty: decodeFromFields(Decimal.reified(), fields.cur_qty),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): RateLimiter {
    if (!isRateLimiter(item.type)) {
      throw new Error("not a RateLimiter type");
    }

    return RateLimiter.reified().new({
      config: decodeFromFieldsWithTypes(
        RateLimiterConfig1.reified(),
        item.fields.config,
      ),
      prevQty: decodeFromFieldsWithTypes(
        Decimal.reified(),
        item.fields.prev_qty,
      ),
      windowStart: decodeFromFieldsWithTypes("u64", item.fields.window_start),
      curQty: decodeFromFieldsWithTypes(Decimal.reified(), item.fields.cur_qty),
    });
  }

  static fromBcs(data: Uint8Array): RateLimiter {
    return RateLimiter.fromFields(RateLimiter.bcs.parse(data));
  }

  toJSONField() {
    return {
      config: this.config.toJSONField(),
      prevQty: this.prevQty.toJSONField(),
      windowStart: this.windowStart.toString(),
      curQty: this.curQty.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): RateLimiter {
    return RateLimiter.reified().new({
      config: decodeFromJSONField(RateLimiterConfig1.reified(), field.config),
      prevQty: decodeFromJSONField(Decimal.reified(), field.prevQty),
      windowStart: decodeFromJSONField("u64", field.windowStart),
      curQty: decodeFromJSONField(Decimal.reified(), field.curQty),
    });
  }

  static fromJSON(json: Record<string, any>): RateLimiter {
    if (json.$typeName !== RateLimiter.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return RateLimiter.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): RateLimiter {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRateLimiter(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RateLimiter object`,
      );
    }
    return RateLimiter.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): RateLimiter {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isRateLimiter(data.bcs.type)) {
        throw new Error(`object at is not a RateLimiter object`);
      }

      return RateLimiter.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return RateLimiter.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<RateLimiter> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RateLimiter object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRateLimiter(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a RateLimiter object`);
    }

    return RateLimiter.fromSuiObjectData(res.data);
  }
}
