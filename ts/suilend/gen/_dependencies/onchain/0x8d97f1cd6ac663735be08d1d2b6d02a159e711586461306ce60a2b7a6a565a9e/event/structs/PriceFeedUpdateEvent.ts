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
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { PriceFeed } from "../../price-feed/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPriceFeedUpdateEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::event::PriceFeedUpdateEvent`;
}

export interface PriceFeedUpdateEventFields {
  priceFeed: ToField<PriceFeed>;
  timestamp: ToField<"u64">;
}

export type PriceFeedUpdateEventReified = Reified<PriceFeedUpdateEvent, PriceFeedUpdateEventFields>;

/**
 * Move struct: `PriceFeedUpdateEvent`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::event`
 */
export class PriceFeedUpdateEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::event::PriceFeedUpdateEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PriceFeedUpdateEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::event::PriceFeedUpdateEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = PriceFeedUpdateEvent.$isPhantom;

  readonly priceFeed: ToField<PriceFeed>;
  readonly timestamp: ToField<"u64">;

  private constructor(typeArgs: [], fields: PriceFeedUpdateEventFields) {
    this.$fullTypeName = composeSuiType(
      PriceFeedUpdateEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::event::PriceFeedUpdateEvent`;
    this.$typeArgs = typeArgs;

    this.priceFeed = fields.priceFeed;
    this.timestamp = fields.timestamp;
  }

  static reified(): PriceFeedUpdateEventReified {
    return {
      typeName: PriceFeedUpdateEvent.$typeName,
      fullTypeName: composeSuiType(
        PriceFeedUpdateEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::event::PriceFeedUpdateEvent`,
      typeArgs: [] as [],
      isPhantom: PriceFeedUpdateEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PriceFeedUpdateEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PriceFeedUpdateEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PriceFeedUpdateEvent.fromBcs(data),
      bcs: PriceFeedUpdateEvent.bcs,
      fromJSONField: (field: any) => PriceFeedUpdateEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PriceFeedUpdateEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PriceFeedUpdateEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PriceFeedUpdateEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PriceFeedUpdateEvent.fetch(client, id),
      new: (fields: PriceFeedUpdateEventFields) => {
        return new PriceFeedUpdateEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PriceFeedUpdateEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PriceFeedUpdateEvent>> {
    return phantom(PriceFeedUpdateEvent.reified());
  }
  static get p() {
    return PriceFeedUpdateEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("PriceFeedUpdateEvent", {
      price_feed: PriceFeed.bcs,
      timestamp: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): PriceFeedUpdateEvent {
    return PriceFeedUpdateEvent.reified().new({
      priceFeed: decodeFromFields(PriceFeed.reified(), fields.price_feed),
      timestamp: decodeFromFields("u64", fields.timestamp),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PriceFeedUpdateEvent {
    if (!isPriceFeedUpdateEvent(item.type)) {
      throw new Error("not a PriceFeedUpdateEvent type");
    }

    return PriceFeedUpdateEvent.reified().new({
      priceFeed: decodeFromFieldsWithTypes(PriceFeed.reified(), item.fields.price_feed),
      timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp),
    });
  }

  static fromBcs(data: Uint8Array): PriceFeedUpdateEvent {
    return PriceFeedUpdateEvent.fromFields(PriceFeedUpdateEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      priceFeed: this.priceFeed.toJSONField(),
      timestamp: this.timestamp.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PriceFeedUpdateEvent {
    return PriceFeedUpdateEvent.reified().new({
      priceFeed: decodeFromJSONField(PriceFeed.reified(), field.priceFeed),
      timestamp: decodeFromJSONField("u64", field.timestamp),
    });
  }

  static fromJSON(json: Record<string, any>): PriceFeedUpdateEvent {
    if (json.$typeName !== PriceFeedUpdateEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PriceFeedUpdateEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PriceFeedUpdateEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPriceFeedUpdateEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PriceFeedUpdateEvent object`,
      );
    }
    return PriceFeedUpdateEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PriceFeedUpdateEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPriceFeedUpdateEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PriceFeedUpdateEvent object`);
      }

      return PriceFeedUpdateEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PriceFeedUpdateEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PriceFeedUpdateEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PriceFeedUpdateEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPriceFeedUpdateEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PriceFeedUpdateEvent object`);
    }

    return PriceFeedUpdateEvent.fromSuiObjectData(res.data);
  }
}
