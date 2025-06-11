import * as reified from "../../../../../_framework/reified.js";
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
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Balance } from "../../../0x2/balance/structs/index.js";
import { ID, UID } from "../../../0x2/object/structs/index.js";
import { SUI } from "../../../0x2/sui/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isStakedSui(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::staking_pool::StakedSui`;
}

export interface StakedSuiFields {
  id: ToField<UID>;
  poolId: ToField<ID>;
  stakeActivationEpoch: ToField<"u64">;
  principal: ToField<Balance<ToPhantom<SUI>>>;
}

export type StakedSuiReified = Reified<StakedSui, StakedSuiFields>;

/**
 * Move struct: `StakedSui`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::staking_pool`
 */
export class StakedSui implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::staking_pool::StakedSui`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = StakedSui.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::staking_pool::StakedSui`;
  readonly $typeArgs: [];
  readonly $isPhantom = StakedSui.$isPhantom;

  readonly id: ToField<UID>;
  readonly poolId: ToField<ID>;
  readonly stakeActivationEpoch: ToField<"u64">;
  readonly principal: ToField<Balance<ToPhantom<SUI>>>;

  private constructor(typeArgs: [], fields: StakedSuiFields) {
    this.$fullTypeName = composeSuiType(
      StakedSui.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::staking_pool::StakedSui`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.poolId = fields.poolId;
    this.stakeActivationEpoch = fields.stakeActivationEpoch;
    this.principal = fields.principal;
  }

  static reified(): StakedSuiReified {
    return {
      typeName: StakedSui.$typeName,
      fullTypeName: composeSuiType(
        StakedSui.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::staking_pool::StakedSui`,
      typeArgs: [] as [],
      isPhantom: StakedSui.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => StakedSui.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        StakedSui.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => StakedSui.fromBcs(data),
      bcs: StakedSui.bcs,
      fromJSONField: (field: any) => StakedSui.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => StakedSui.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        StakedSui.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        StakedSui.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        StakedSui.fetch(client, id),
      new: (fields: StakedSuiFields) => {
        return new StakedSui([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return StakedSui.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<StakedSui>> {
    return phantom(StakedSui.reified());
  }
  static get p() {
    return StakedSui.phantom();
  }

  static get bcs() {
    return bcs.struct("StakedSui", {
      id: UID.bcs,
      pool_id: ID.bcs,
      stake_activation_epoch: bcs.u64(),
      principal: Balance.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): StakedSui {
    return StakedSui.reified().new({
      id: decodeFromFields(UID.reified(), fields.id),
      poolId: decodeFromFields(ID.reified(), fields.pool_id),
      stakeActivationEpoch: decodeFromFields(
        "u64",
        fields.stake_activation_epoch,
      ),
      principal: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.principal,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): StakedSui {
    if (!isStakedSui(item.type)) {
      throw new Error("not a StakedSui type");
    }

    return StakedSui.reified().new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      poolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool_id),
      stakeActivationEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_activation_epoch,
      ),
      principal: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.principal,
      ),
    });
  }

  static fromBcs(data: Uint8Array): StakedSui {
    return StakedSui.fromFields(StakedSui.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      poolId: this.poolId,
      stakeActivationEpoch: this.stakeActivationEpoch.toString(),
      principal: this.principal.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): StakedSui {
    return StakedSui.reified().new({
      id: decodeFromJSONField(UID.reified(), field.id),
      poolId: decodeFromJSONField(ID.reified(), field.poolId),
      stakeActivationEpoch: decodeFromJSONField(
        "u64",
        field.stakeActivationEpoch,
      ),
      principal: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.principal,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): StakedSui {
    if (json.$typeName !== StakedSui.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return StakedSui.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): StakedSui {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStakedSui(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a StakedSui object`,
      );
    }
    return StakedSui.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): StakedSui {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isStakedSui(data.bcs.type)) {
        throw new Error(`object at is not a StakedSui object`);
      }

      return StakedSui.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return StakedSui.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<StakedSui> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching StakedSui object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStakedSui(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a StakedSui object`);
    }

    return StakedSui.fromSuiObjectData(res.data);
  }
}
